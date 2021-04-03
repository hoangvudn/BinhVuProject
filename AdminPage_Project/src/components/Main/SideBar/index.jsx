import React from 'react';
import "./style/sidebarStyle.scss";
import menuLogo from '../../images/nav.png';
import { Link } from 'react-router-dom';
import { MdCardTravel } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
const SideBar = ( { show } ) => {
   return (
          <div  className={ show ? "blockSideBar active" : "blockSideBar"}>
             <ul className="blockSideBar__menuSideBar">
                <div className="blockSideBar__groupItem">
                   <Link to={"/usersList"} className="blockSideBar__linkTitle">
                      <FaUserAlt className="blockSideBar__icon"/>
                      <li>USERS</li>
                   </Link>
                </div>
                <Link to={"/toursList"} className="blockSideBar__linkTitle"> 
                  <div className="blockSideBar__groupItem">
                        <MdCardTravel className="blockSideBar__icon"/>
                        <li>TOUR</li>
                  </div>
                </Link>           
             </ul>
          </div>
   )
}
export default  SideBar;

// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
// //import './index.css';
// import { Layout, Menu } from 'antd';
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

// const { Header, Content, Footer, Sider } = Layout;
// const SideBar = () => {
// return (
//   <Layout>
//     <Sider
//       breakpoint="lg"
//       collapsedWidth="0"
//       onBreakpoint={broken => {
//         console.log(broken);
//       }}
//       onCollapse={(collapsed, type) => {
//         console.log(collapsed, type);
//       }}
//     >
//       <div className="logo" />
//       <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
//         <Menu.Item key="1" icon={<UserOutlined />}>
//           Users
//         </Menu.Item>
//         <Menu.Item key="2" icon={<VideoCameraOutlined />}>
//           Tour
//         </Menu.Item>
//         {/* <Menu.Item key="3" icon={<UploadOutlined />}>
//           nav 3

//         </Menu.Item>
//         <Menu.Item key="4" icon={<UserOutlined />}>
//           nav 4
//         </Menu.Item> */}
//       </Menu>
//     </Sider>
//     <Layout>
//       <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
//       <Content style={{ margin: '24px 16px 0' }}>
//         <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
//           content
//         </div>
//       </Content>
//       <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
//     </Layout>
//   </Layout>
//    //  document.getElementById('container')
// );
// }
// export default  SideBar;
//   </Layout>
//    //  document.getElementById('container')
// );
// }
// export default  SideBar;