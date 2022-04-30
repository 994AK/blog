import {useState} from 'react';
import {Layout, Menu} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import styles from './style.module.scss'

const {Header, Sider, Content} = Layout;

const HomeManagement = () => {
  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => setCollapsed(!collapsed)
  const handleHomePageRedirect = () => {window.location.href = '/'}
  const items = [
    {
      key: '1',
      icon: <UserOutlined/>,
      label: 'nav 1',
    },
    {
      key: '2',
      icon: <VideoCameraOutlined/>,
      label: 'nav 2',
    },
    {
      key: '3',
      icon: <UploadOutlined/>,
      label: '返回用户页面',
      onClick: handleHomePageRedirect
    },
  ]

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo"/>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background"  style={{padding: 0}}>
          {
            collapsed
              ? <MenuUnfoldOutlined className={styles.trigger} onClick={toggle}/>
              : <MenuFoldOutlined className={styles.trigger} onClick={toggle}/>
          }
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
}

export default HomeManagement;
