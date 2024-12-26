import { BrowserRouter, Route, Routes  } from "react-router-dom";
import App from './App';
import User from './components/user/user';
import Admin from './components/admin/admin';
import HomePage from './components/Home/HomePage';
import DashBoard from './components/admin/content/dashboard';
import ManageUser from './components/admin/content/manageuser';
import Login from './components/Auth/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from "./components/Auth/Signup";
import ListQuiz from "./components/user/listQuiz";
import DetailQuiz from "./components/user/DetailQuiz";

const NotFound=()=>{
    return(
        <div className="alert alert-danger container mt-3">
            Not Found data with your current URL
        </div>
    )
}
const Layout=(props)=>{
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<HomePage />} />
                    <Route path="users" element={<ListQuiz />} />
                </Route>
                <Route path="quiz/:id" element={<DetailQuiz />} />

                <Route path="admin" element={<Admin />}>
                    <Route index element={<DashBoard />} /> 
                    <Route path="manage-users" element={<ManageUser />} /> 
                </Route>
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
               />
            <ToastContainer />
        </>
    )
}
export default Layout;