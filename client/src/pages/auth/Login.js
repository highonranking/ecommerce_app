import React, {useState} from 'react';
import {auth} from '../../firebase';
import {toast} from "react-toastify";
import {Button} from 'antd';
import {MailOutlined} from "@ant-design/icons";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault() ;   // prevent browser from reload
       console.log(email, password);

    }

   
    const loginForm = () =>( 
    <form onSubmit={handleSubmit}>
        <div className="form-group">
        <input type="email"
         className="form-control mt-3" 
         value={email} 
         onChange={e => setEmail(e.target.value)}
         placeholder="Your Email"
         autoFocus
         />
        </div>
        <div className="form-group">
        <input type="password"
         className="form-control mt-3" 
         value={password}
         onChange={e => setPassword(e.target.value)}
         placeholder="Your Password"
    
         />
        </div>
        
        <div className="text-center">
        <Button onClick={handleSubmit} 
        type="primary"
        className="btn-raised mt-4 mb-3"
        shape="round"
        icon={<MailOutlined/>}
        size="large"
        disabled={!email || password.length < 6}
        >Login with Email/Password</Button>
        </div>
        
        
    </form>
    );
    return (
        <div className="container p-5">
            <div className="row">
                <div className="clo-md-6 text-center">
                    <h4>Login Details</h4>
                
                    {loginForm()}
                </div>
            </div>
        </div>
    );
};

export default Login;