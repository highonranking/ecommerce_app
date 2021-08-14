import React, {useState, useEffect} from 'react';
import {auth} from '../../firebase';
import {toast} from "react-toastify";

const RegisterComplete = ({history}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    useState(() => {
        console.log(window.localStorage.getItem('emailForRegistration'));
    }, []);
    
    const handleSubmit = async (e) => {
        e.preventDefault() ;   // prevent browser from reload
       
    };
    const completeRegistrationForm = () => <form onSubmit={handleSubmit}>
        <input type="email"
         className="form-control" 
         value={email} 
         onChange={e => setEmail(e.target.value)}
         autoFocus
         />
        <div className="text-center">
        <button type="submit" className="btn btn-lg btn-success btn-raised mt-4">
           Complete  Register
         </button>
        </div>
        
        
    </form>
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