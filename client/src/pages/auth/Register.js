import React, {useState} from 'react';
import {auth} from '../../firebase';
import {toast} from "react-toastify";

const Register = () => {
    const [email, setEmail] = useState("");
    const handleSubmit = async (e) => {
       // console.log(process.env.REACT_APP_REGISTER_REDIRECT_URL);
        e.preventDefault() ;   // prevent browser from reload
        const config = {
            url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
            handleCodeInApp: true
        }

        await auth.sendSignInLinkToEmail(email, config);
        toast.success(`Email is sent to ${email}. Click on the click to complete your Registration.`);

        // local
        window.localStorage.setItem('emailForRegistration', email);

        //clear
        setEmail("");

    }
    const registerForm = () => <form onSubmit={handleSubmit}>
        <input type="email"
         className="form-control" 
         value={email} 
         onChange={e => setEmail(e.target.value)}
         autoFocus
         />
        <div className="text-center">
        <button type="submit" className="btn btn-lg btn-success btn-raised mt-4">
             Register
         </button>
        </div>
        
        
    </form>
    return (
        <div className="container p-5">
            <div className="row">
                <div className="clo-md-6">
                    <h4>Register</h4>
                
                    {registerForm()}
                </div>
            </div>
        </div>
    );
};

export default Register;