import { useState } from 'react';
import './Login.scss'
const Login=(props)=>{
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    const handleLogin=()=>{
        alert("login")
    }
    return (
        <div className="login-container">
            <div className="login-header">
                Don't have an account yet?
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
            </div>
        </div>
    )
}
export default Login;