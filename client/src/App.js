import { Outlet,createBrowserRouter,RouterProvider,Navigate } from "react-router-dom";
import LeftBar from "./components/LeftBar";
import Messages from "./components/Messages";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Timeline from "./components/Timeline";
import AddEvent from "./components/AddEvent";
import Profile from "./components/Profile";
import UpdateUser from "./components/updateUser";
import Event from "./components/Event";
import Message from "./components/Message";
import MyOrganisedEvents from "./components/MyOrganisedEvents";
import UpdateEvent from "./components/UpdateEvent";



function App() {
  const currentUser = true

  const Layout = () => {
    return (
      <div className="w-screen overflow-hidden">
    <Navbar />
    <div className='h-[100vh] flex'>
        {/* sidebar component */}
       <div className='flex-2 w-[30%] border-r-[1px] border-b-gray-300'>
        {currentUser && <LeftBar />}
       </div>
       <div className='flex-1 bg-gray-200'>
        <Outlet />
       </div>
    </div>
    </div>   
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Timeline />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        ,
        {
          path: "/add-event/",
          element: <AddEvent />,
        }
        ,
        {
          path: "/messages/",
          element: <Messages />,
        },
        {
          path: "/messages/:id",
          element: <Message />,
        }
        ,
        {
          path: "/update-user/:id",
          element: <UpdateUser />,
        }
        ,
        {
          path: "/my-organised-events/",
          element: <MyOrganisedEvents />,
        }
        ,
        {
          path: "/update-event/:id",
          element: <UpdateEvent />,
        }
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    ,
    {
      path: "/events/:id",
      element: <Event currentUser={currentUser} />,
    }
  ]);

  
  return (
    <div>
    <RouterProvider router={router} />
  </div>
  );
}

export default App;
