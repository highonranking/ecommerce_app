import React, {useState} from 'react';
import { Menu } from 'antd';
import { UserOutlined, UserAddOutlined, HomeOutlined, LogoutOutlined, MenuOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';

import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const { SubMenu, Item } = Menu; 


const Header = () => {
const [current, setCurrent] = useState("home");
let dispatch = useDispatch();
let {user} = useSelector((state) => ({...state}));
let history = useHistory();



const handleClick = (e) => {
    setCurrent(e.key);
};

const logout = () => {
  firebase.auth().signOut()
  dispatch({
    type: "LOGOUT",
    payload: null,
  });
  history.push("/login");
};
return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Item key="home" icon={<HomeOutlined /> }>
          <Link to="/">Home</Link>
        </Item>
        {!user && (
        <Item key="register" icon={<UserAddOutlined /> } className="float-end">
        <Link to="/register">Register</Link>
        </Item>
        ) }
       
       {!user && ( <Item key="login" icon={ <UserOutlined/> } className="float-end">
        <Link to="/login">Login</Link>
        </Item>
        )}
       
       {
         user && ( <SubMenu icon={<MenuOutlined />} title={user.email && user.email.split('@')[0]} className="float-end"> 
          
         <Item key="setting:1">Option 1</Item>
         <Item key="setting:2">Option 2</Item>
         <Item icon={ <LogoutOutlined /> } onClick={logout}>Logout</Item>

     </SubMenu>
     )}
        
      </Menu>
)
}

export default Header;