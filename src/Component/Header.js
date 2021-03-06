import React, { useEffect, useState } from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import { Nav} from 'react-bootstrap';
import { Layout, Menu } from 'antd';
import { useHistory } from "react-router-dom";


const Header = () => {
    const history = useHistory();
    const [isValidUser, setIsValidUser] = useState(false);
    console.log("Inside Header")
    useEffect(() => {
        let val = localStorage.getItem('token');
        console.log(val)
        val ? setIsValidUser(true) : history.push("/login");
        console.log(val)
    }, [history]);

    const logoutUser = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('LoggedInUser');
        localStorage.removeItem('token');
        // history.push("/login");   
        setTimeout(() => {
            console.log('logout component In Header'); 
            setIsValidUser(false);
            history.push("/login");
        }, 500);     
    }

    return (

        <>
            <div className="logo" />
            {isValidUser ?
                <Menu theme="dark" mode="horizontal">
                    {/* <Menu.Item key="home"><a href="/">Home</a></Menu.Item> */}
                    <Menu.Item key="users" style={{textAlign:'left', width:'90%'}}><a href="/userList">User List</a></Menu.Item>
                    <Menu.Item key="logout" style={{textAlign:'center', width:'10%' }}><a onClick={logoutUser}>Logout</a></Menu.Item>
                </Menu>
                : null}
        </>
    );
}

export default Header;