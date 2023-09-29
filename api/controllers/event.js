import { db } from "../connect.js"
import jwt from 'jsonwebtoken'
import moment from 'moment'

export const getEvents = (req,res)=>{
    const q = `SELECT e.*,u.id AS userId,username,profilePic FROM events AS e JOIN users AS u ON (u.id = e.userId)`

    db.query(q, (err,data)=>{
        if (err) return res.status(500).json(err)
        return res.status(200).json(data)
    })
}

export const getLocalEvents = (req,res)=>{
    const token = req.cookies.accessToken;
    
    if(!token) return res.status(401).json("Not logged in")

    jwt.verify(token, process.env.JWT_SECRET, (err,userInfo)=>{
        if(err) return res.status(403).json("Token is not valid!")

       
    const q = `SELECT events.*,users.id,users.location FROM events JOIN users ON events.location = users.location WHERE users.id = ?`


    const values = [userInfo.id]

    db.query(q,values, (err, data) => {
        if(err) return res.status(500).json(err);

        const {password, ...others} = data
        return res.status(200).json(Object.values(others));
    })
    })

}

export const getSingleEvent = (req,res)=>{
       
    const q = `SELECT * FROM events WHERE id = ?`
    
    const values = [req.params.id]
    db.query(q,values, (err, data) => {
        if(err) return res.status(500).json(err);

        const {password, ...others} = data
        return res.status(200).json(others[0]);
    })

}

export const getUserEvents = (req,res)=>{

    const q = `SELECT * FROM events WHERE userId = ?`
    db.query(q,[req.params.id], (err, data) => {
        if(err) return res.status(500).json(err);

        return res.status(200).json(data);
    })

}

export const addEvent = (req,res)=>{
    const token = req.cookies.accessToken;
    
    if(!token) return res.status(401).json("Not logged in")

    jwt.verify(token, process.env.JWT_SECRET, (err,userInfo)=>{
        if(err) return res.status(403).json("Token is not valid!")

       
    const q = "INSERT INTO events (`title`,`description`,`location`,`address`,`category`,`img`,`date`,`createdAt`,`userId`) VALUES (?)"

    const values = [
        req.body.title,
        req.body.description,
        req.body.location,
        req.body.address,
        req.body.category,
        req.body.img,
        req.body.date,
        moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        userInfo.id,
    ]

    db.query(q,[values], (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json("Post created successfully");
    })
    })
}

export const updateEvent = (req,res)=>{
    const token = req.cookies.accessToken;

    if(!token) return res.status(401).json("Not logged in")

    jwt.verify(token, process.env.JWT_SECRET, (err,userInfo)=>{
        if(err) return res.status(403).json("Token is not valid!")

       
        
        const q= "UPDATE events SET `title`=?,`description`=?,`location`=?,`address`=?,`category`=?,`img`=?,`date`=? WHERE `id` = ? AND `userId` = ?"

        db.query(q,[
            req.body.title, 
            req.body.description, 
            req.body.location, 
            req.body.address, 
            req.body.category,
            req.body.img,
            moment(req.body.date).format("YYYY-MM-DD HH:mm:ss"),
            userInfo.id], (err,data)=>{
                if(err) res.status(500).json(err)
                if (data.affectedRows>0) return res.json("Updated!")
                return res.status(403).json("You can only update your own events")
            }
            )
    })
}

export const deleteEvent = (req, res) => {
    const token = req.cookies.accessToken;

    if(!token) return res.status(401).json("Not logged in")

    jwt.verify(token, process.env.JWT_SECRET, (err,userInfo)=>{
        if(err) return res.status(403).json("Token is not valid!")

       
        
        const q= "DELETE FROM events WHERE `id` = ? AND `userId` = ? ";


    db.query(q,[req.params.id,userInfo.id], (err, data) => {
        if(err) return res.status(500).json(err);
        if (data.affectedRows>0) return res.status(200).json("Post deleted successfully")
        return res.status(403).json("You cannot delete someone elses post");
    })
    })
}

export const eventAttendees = (req,res)=>{

    const q = `SELECT a.*, events.id, users.id, users.username, 
    users.profilePic, users.occupation, users.company,users.website 
    FROM attendees AS a JOIN events ON  events.id = a.eventId
    JOIN users ON users.id = a.userId
    WHERE a.eventId = ?`

    db.query(q,[req.params.eventId], (err,data)=>{
        if (err) return res.status(500).json(err)

        const {password, ...others} = data
        return res.status(200).json(Object.values(others))
    })
}

export const attendEvent = (req,res)=>{
    const token = req.cookies.accessToken;
    
    if(!token) return res.status(401).json("Not logged in")

    jwt.verify(token, process.env.JWT_SECRET, (err,userInfo)=>{
        if(err) return res.status(403).json("Token is not valid!")

    
       
    const q = "INSERT INTO attendees (`interest`,`eventId`,`userId`) VALUES (?)"

    const values = [
        req.body.interest,
        req.params.eventId,
        userInfo.id,
    ]

    db.query(q,[values], (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json("You are attending this event");
    })
    })
}

export const getMyAttending = (req, res) => {
    const userId = req.query.userId
    const token = req.cookies.accessToken;

if(!token) return res.status(401).json("Not logged in")

    jwt.verify(token, process.env.JWT_SECRET, (err,userInfo)=>{
        if(err) return res.status(403).json("Token is not valid!")
    
    const q=`SELECT * FROM events JOIN attendees 
    ON attendees.eventId = events.id WHERE attendees.userId = ?`

    const values = [userInfo.id]

    db.query(q,values, (err, data) => {
    if(err) return res.status(500).json(err);
    return res.status(200).json(data);
    })
})
}

export const deleteAttendance = (req,res)=>{
    const token = req.cookies.accessToken;
    
    if(!token) return res.status(401).json("Not logged in")

    jwt.verify(token, process.env.JWT_SECRET, (err,userInfo)=>{
        if(err) return res.status(403).json("Token is not valid!")

    
       
    const q="DELETE FROM attendees WHERE `userId`=? AND `eventId`=?";

    db.query(q,[userInfo.id,req.params.eventId], (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json("Your attendance has been removed");
    })
    })
}