import React from 'react';
import {Route, Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLoading, BallTriangle } from "@agney/react-loading";


const UserRoute = ({children, ...rest}) => {
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <BallTriangle width="50" />
      });
    
    const {user} = useSelector((state) => ({...state}));

    return user && user.token ? (
        <Route {...rest} render={() => children}/>
        ) : ( //loading
            <section {...containerProps} className=" d-flex justify-content-center flex-nowrap">
               {indicatorEl}
               <h3>Please Login to see content</h3>
                 {indicatorEl} {/* renders only while loading */}  
                 
            </section>
        ) // see this 
}

export default UserRoute;