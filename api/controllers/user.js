import { db } from "../connect.js"
import jwt from 'jsonwebtoken'

export const getUser = (req,res)=>{
    
    const q = `SELECT id,username,email,profilePic,occupation,company,linkedin,github,twitter,instagram,website,location 
    FROM mesh.users WHERE id = ?`
    
    const values = [req.params.id]
    db.query(q,values, (err, data) => {
        if(err) return res.status(500).json(err);

        const {password, ...others} = data
        return res.status(200).json(others[0]);
    })
}

export const updateUser = (req,res)=>{
    const token = req.cookies.accessToken;

    if(!token) return res.status(401).json("Not logged in")

    jwt.verify(token, process.env.JWT_SECRET, (err,userInfo)=>{
        if(err) return res.status(403).json("Token is not valid!")

       
        
        const q= "UPDATE users SET `username`=?,`email`=?,`occupation`=?,`company`=?,`linkedin`=?,`instagram`=?,`twitter`=?,`github`=?,`website`=?,`profilePic`=? WHERE `id` = ?"

        db.query(q,[
            req.body.username, 
            req.body.email, 
            req.body.occupation, 
            req.body.company,
            req.body.linkedin,
            req.body.instagram,
            req.body.twitter,
            req.body.github,
            req.body.website,
            req.body.profilePic,
            userInfo.id], (err,data)=>{
                if(err) res.status(500).json(err)
                if (data.affectedRows>0) return res.json("Updated!")
                return res.status(403).json("You can only update your own account")
            }
            )
    })
}