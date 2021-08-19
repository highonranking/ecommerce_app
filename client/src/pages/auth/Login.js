import React, {useState} from 'react';
import {auth, googleAuthProvider} from '../../firebase';
import {toast} from "react-toastify";
import {Button} from 'antd';
import {MailOutlined, LoadingOutlined, GoogleOutlined} from "@ant-design/icons";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const Login = ({history}) => {
    const [email, setEmail] = useState("abhinav230601@gmail.com");
    const [password, setPassword] = useState("111111");
    const [loading, setLoading] = useState(false);
    

    let dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault() ;  
         // prevent browser from reload
         setLoading(true)
       try{
      const result =  await auth.signInWithEmailAndPassword(email, password);
      //console.log(result);
        const {user} = result;
        const idTokenResult = await user.getIdTokenResult();
        dispatch({
            type : 'LOGGED_IN_USER',
            payload: {
              email: user.email,
              token: idTokenResult.token,
            },
          });
          toast.success(`Logged in with ${email}`);
          history.push('/');
       }catch (error){
            console.error(error);
            toast.error(error.message);
            setLoading(false);
       }
    };
    
    const googleLogin = async () => {
        auth.signInWithPopup(googleAuthProvider)
        .then(async (result) => {
            const {user} = result;
            const idTokenResult = await user.getIdTokenResult();
            dispatch({
                type : 'LOGGED_IN_USER',
                payload: {
                  email: user.email,
                  token: idTokenResult.token,
                },
              });
              toast.success(`Logged in with ${email}`);
              history.push('/');
        })
        .catch((err) => {
            console.log(err);
            toast.error(err.message);
        });
    };

   
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
                   {!loading ?  <h4>Login Details</h4> : <LoadingOutlined />}
                
                    {loginForm()}
                    <Button onClick={googleLogin} 
                        type="danger"
                        className="btn-raised mt-4 mb-3"
                        shape="round"
                        icon={<GoogleOutlined/>}
                        size="large"
                        >Login with Google
                    </Button>
                    <Link to="/forgot/password" className="float-end text-danger">
                        Forgot Password
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;