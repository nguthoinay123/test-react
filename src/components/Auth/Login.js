import { useState } from 'react';
import './Login.scss'
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiService';
import { toast } from 'react-toastify';

const Login=(props)=>{
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const navigate=useNavigate();

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    const handleLogin=async()=>{
        //validate
        const isValidEmail=validateEmail(email);
            if(!isValidEmail){
            toast.error('invalid email')
            // toast.success("ss")
            // toast.info()

            return ;
            }
            if(!password){
            toast.error('invalid password')
            }
            
        //sumitlogin
        let data = await postLogin(email, password)
        if(data && data.EC===0){
            toast.success(data.EM)
            navigate('/')
          }
          if(data && data.EC!==0){
            toast.error(data.EM)
            
          }
    }
    return (
        <div className="login-container">
            <div className="login-header">
                <span>Don't have an account yet?</span>
                <button onClick={()=>{navigate('/signup')}}>Sign up</button>
            </div>
            <div className="login-title col-4 mx-auto">
                Login
            </div>
            <div className="login-welcome col-4 mx-auto">
                Hello Who's this?
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Email</label>
                    <input type={"email"} className="form-control" value={email} onChange={(event)=> setEmail(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type={"password"} className="form-control" value={password} onChange={(event)=> setPassword(event.target.value)}/>
                </div>
                <span className='forgot-password'>Forgot password?</span>
                <div>
                    <button className="btn-submit" onClick={()=>handleLogin()}>Login</button>
                </div>
                <div className='text-center'>
                    <span className='back' onClick={()=> { navigate('/')}}>&lt;- Go to Homepage</span>
                </div>
            </div>
        </div>
    )
}
export default Login;