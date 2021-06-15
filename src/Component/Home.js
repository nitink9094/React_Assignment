import React, { Component, useEffect, useState } from 'react';
import User from './Users';
import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory();
    const [isValidUser, setIsValidUser] = useState(false);
    const [LoggedInUser, setLoggedInUser] = useState('');
    
    useEffect(() => {
        if(localStorage.getItem('isLoggedIn') === 'Y') { 
            console.log('yes');
            setIsValidUser(true);
            setLoggedInUser(localStorage.getItem('LoggedInUser')) 
        }
        else {
            history.push('/Login');
            console.log('not logged in');
        }
    }, []);
    
    return(
        <div>
            <h1>
                Welcome {LoggedInUser} !!!!
            </h1>
        </div> 
        
    )
       
}

export default Home;