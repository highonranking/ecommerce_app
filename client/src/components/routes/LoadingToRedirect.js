import React, {useState, UseEffect, useEffect} from"react";
import { useHistory } from "react-router-dom";
import { useLoading, BallTriangle } from "@agney/react-loading";


const LoadingToRedirect = () => {
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <BallTriangle width="50" />
      });
    
    const [count, setCount] = useState(5);
    let history = useHistory()

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount);

        }, 1000);
        // redirect at 0
        count === 0 && history.push('/login');

        return() => clearInterval(interval);

    }, [count]);

    return (
        <div className="container p-5 text-center">
            <section {...containerProps} className=" d-flex justify-content-center flex-nowrap">
               {indicatorEl}
               <h3>Please Login to see content</h3>
                 {indicatorEl} {/* renders only while loading */}  
                 
            </section>
            <br/>
            <h4>Redirecting in {count} seconds</h4>
        </div>
    );
};

export default LoadingToRedirect;