import React, {useState, useEffect} from 'react';
import {auth,} from '../../firebase';
import {toast} from "react-toastify";
import {Button} from 'antd';
import {  LoadingOutlined, RightCircleOutlined} from "@ant-design/icons";
import { useSelector } from 'react-redux';

const ForgotPassword = ({history}) => {
const [email, setEmail] = useState('');
const [loading, setLoading] = useState(false);

const {user} = useSelector((state) => ({...state}));
useEffect(() => {
    if(user && user.token)
        history.push('/');
}, [user, history]);

const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    const config = {
        url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT_URL,
        handleCodeInApp: true,
    };
    await auth.sendPasswordResetEmail(email, config)
    .then(() => {
        setEmail('');
        setLoading(false);
        toast.success(`Mail has been sent to ${email}. Please check your mail to reset password.`)
    })
    .catch((error)  => {
    setLoading(false);
    console.error("ERROR IN FORGOT PASSWORD", error);
    toast.error(error.message);
    });
    //
};
return <div className="container col-md-5 offset-md-3 p-5">
   {!loading ?  <h4 className="text-center">Forgot Password</h4> : <LoadingOutlined twoToneColor="#eb2f96"/>}

   <form onSubmit={handleSubmit}>
       <input 
       type="email" 
       className="form-control mt-4" 
       value={email}
       onChange= {(e)=> setEmail(e.target.value)} 
       placeholder="Enter your email address"
       autoFocus
       />
        <div className="text-center">
            
        <Button
                 onClick={handleSubmit} 
                type="danger"
                className="btn-raised mt-4 mb-3"
                disabled= {!email}
                shape="round"
                icon={<RightCircleOutlined/>}
                size="large"
                >Proceed
                    </Button>
        </div>
   </form>
</div>

}


export default ForgotPassword;