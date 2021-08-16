import React, {useState, useEffect} from 'react';
import {auth} from '../../firebase';
import {toast} from "react-toastify";

const RegisterComplete = ({history}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    useState(() => {
        setEmail(window.localStorage.getItem('emailForRegistration'));
    }, []);
    
    const handleSubmit = async (e) => {
        e.preventDefault() ; 
        
        // prevent browser from reload
       
    };
    const completeRegistrationForm = () => (
    <form onSubmit={handleSubmit}>
        <input type="email"
         className="form-control" 
         value={email} 
         disabled
         />

        <input type="password"
         className="form-control mt-3" 
         value={password} 
         onChange={e => setPassword(e.target.value)}
         placeholder="Type Strong Password"
         autoFocus
         />

        <div className="text-center mt-3">
        <button type="submit" className="btn btn-lg btn-success btn-raised mt-4">
           Complete  Registration
         </button>
        </div>
        
        
    </form>
    );
    return (
        <div className="container p-5">
            <div className="row">
                <div className="clo-md-6">
                    <h4>Complete Registration</h4>
                
                    {completeRegistrationForm()}
                </div>
            </div>
        </div>
    );
};

export default RegisterComplete;