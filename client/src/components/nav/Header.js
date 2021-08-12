import React, {useState} from 'react';
import { Menu } from 'antd';
import {SettingOutlined, UserOutlined, UserAddOutlined, HomeOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';


const { SubMenu, Item } = Menu; 


const Header = () => {
const [current, setCurrent] = useState("home")

const handleClick = (e) => {
    setCurrent(e.key);
};

return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Item key="home" icon={<HomeOutlined /> }>
          <Link to="/">Home</Link>
        </Item>

        <Item key="register" icon={<UserAddOutlined /> } className="float-end">
        <Link to="/register">Register</Link>
        </Item>
       
        <Item key="login" icon={ <UserOutlined/> } className="float-end">
        <Link to="/login">Login</Link>
        </Item>

       
        <SubMenu icon={<SettingOutlined />} title="Username">
          
            <Item key="setting:1">Option 1</Item>
            <Item key="setting:2">Option 2</Item>
         

        </SubMenu>
        
      </Menu>
)
}

export default Header;