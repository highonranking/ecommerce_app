import React, { useEffect, useState } from 'react';
import {Route} from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoadingToRedirect from './LoadingToRedirect';
import { currentAdmin } from '../../functions/auth';
import { toast } from 'react-toastify';

const AdminRoute = ({children, ...rest}) => {
    
    const {user} = useSelector((state) => ({...state}));
    const [ok, setOk] = useState(false);

    useEffect(() => {
        if(user && user.token) {
            currentAdmin(user.token)
            .then(res => {
                console.log('CURRENT ADMIN RES', res);
                setOk(true);
            })
            .catch(err =>{
                console.log('ADMIN ROUTE ERR', err);
                toast.error(err.message);
                setOk(false);
            });
        }
    }, [user]);

    return ok  ? (
        <Route {...rest} />
        ) : ( //loading
            <LoadingToRedirect/>
        )
};
        
export default AdminRoute;