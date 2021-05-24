import React,{ useState} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
const { Header, Content } = Layout;
const MainLayout=({children}) =>{
 const [collapsed,setCollapsed]= useState(false)
  const toggle = () => {
 setCollapsed(!collapsed)
  };
    return (
        <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" className="links" >

          <Menu.Item key="0"><Link to="/home">HOME</Link></Menu.Item>
            <Menu.Item key="1"><Link to="/signup">Signup</Link></Menu.Item>
            <Menu.Item key="2" > <Link to="/signin">Signin</Link> </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
        {children}
          
        </Content>
      </Layout>
    );
    }
export default MainLayout;




