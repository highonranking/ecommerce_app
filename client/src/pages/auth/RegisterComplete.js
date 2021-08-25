import React, {useState, useEffect} from 'react';
import {auth} from '../../firebase';
import {toast} from "react-toastify";
import { useDispatch } from 'react-redux';
import {createOrUpdateUser} from '../../functions/auth';


const RegisterComplete = ({history}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
   // const {user} = useSelector((state) => ({...state}));
    let dispatch = useDispatch();


    useEffect(() => {
        setEmail(window.localStorage.getItem('emailForRegistration'));
    }, [history]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        // prevent browser from reload
        //validation
        if(!email || !password){
            toast.error('Email and Password is required!');
            return;
        }

        if(password.length < 6){
            toast.error('Password should be atleast 6 characters long!');
            return;
        }
        
        try{
            const result = await auth.signInWithEmailLink(
                email, 
                window.location.href
                );
             //   console.log('RESULT', result);
             if(result.user.emailVerified){
                 // local email remove
                window.localStorage.removeItem('emailForRegistration');

                 // get id token
                 let user = auth.currentUser;
                 await user.updatePassword(password);
                 const idTokenResult = await user.getIdTokenResult();
                // redux store
                console.log('user', user, 'idTokenResult', idTokenResult);
                 //redirect
                 createOrUpdateUser(idTokenResult.token)
                 .then((res) => {
                     dispatch({
                         type : 'LOGGED_IN_USER',
                         payload: {
                             name: res.data.name,
                           email: res.data.email,
                           token: idTokenResult.token,
                           role: res.data.role,
                           _id: res.data._id,
                         },
                       });
                       toast.success(`Welcome ${email.split('@')[0]}`);
                 })
                 .catch(err => console.log(err));
                 history.push('/');
             }
        } catch(error){
            console.log(error);
            toast.error(error.message);
        }

       
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
        <button type="submit" className="btn btn-lg btn- btn-raised mt-4 btn-success">
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