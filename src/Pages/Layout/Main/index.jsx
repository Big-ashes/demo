import React, { Component } from 'react';
import 'antd/dist/antd.css'
import './index.css'
import { Route, Switch, Routes, BrowserRouter, Link } from 'react-router-dom';

import { mainRoutes } from '../../Routes'
import Deparment from '../../Department';
import Manager from '../../Manager'
import Footer from '../../../conmponents/Footer';
import Information from '../../Information';
import GateTime from '../../GateTime';
import User from '../../User';
import Face from '../../Face/face';
import Area from '../../Area';
import Abnormal from '../../Abnormal';
import FaceReco from '../../FaceReco';

import { Layout, Menu, Breadcrumb } from 'antd';
import {
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  RobotOutlined,
  FieldTimeOutlined,
  AppstoreAddOutlined,
  ContactsOutlined,
  ReconciliationOutlined,
  IdcardOutlined,
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

export default class Main extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" ></div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<RobotOutlined />}><Link to="facereco" />
              识别面板
            </Menu.Item>
            <Menu.Item key="2" icon={<IdcardOutlined />}><Link to="manager" />
              管理员管理
            </Menu.Item>
            <Menu.Item key="sub1" icon={<UserOutlined />}><Link to="user" />
              员工信息管理
            </Menu.Item>
            <Menu.Item key="sub2" icon={<TeamOutlined />}><Link to="department" />
              部门管理
            </Menu.Item>
            <Menu.Item key="sub3" icon={<ReconciliationOutlined />}><Link to="face" />
              人脸库管理
            </Menu.Item>
            <Menu.Item key="sub4" icon={<ContactsOutlined />}><Link to="information" />
              门禁出入管理
            </Menu.Item>
            <Menu.Item key="sub5" icon={<TeamOutlined />}><Link to="abnormal" />
              门禁异常信息管理
            </Menu.Item>
            <Menu.Item key="sub6" icon={<AppstoreAddOutlined />}><Link to="area" />
              门禁区域管理
            </Menu.Item>
            <Menu.Item key="sub7" icon={<FieldTimeOutlined />}><Link to="gatetime" />
              门禁时间管理
            </Menu.Item>
            <Menu.Item key="11" icon={<FileOutlined />}><Link to="manager" />
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Routes>
              <Route path='/department/' element={<Deparment />}></Route>
              <Route path='/manager/' element={<Manager />} />
              <Route path='/information/' element={<Information />}></Route>
              <Route path='/face/' element={<Face />}></Route>
              <Route path='/area/' element={<Area />}></Route>
              {/* {mainRoutes.map(route=>{
                return <Route path={route.path} element={route.Element}/>
              })} */}
              <Route path='/abnormal/' element={<Abnormal />}></Route>
              <Route path='/gatetime/' element={<GateTime />}></Route>
              <Route path='/user/' element={<User />}></Route>
              <Route path='/facereco/' element={<FaceReco />}></Route>

            </Routes>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}
