import React from 'react';
import { Layout, Card, Button, Space } from 'antd';
import './App.css';
import data from './data.json';

const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;

const items =
  data.items.map(item => (
    <Card title={item.name} style={{ width: 600 }} hoverable>
    <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
      Inner Card content
    </Card>      
      <p>{item.description}</p>
      <Meta  description={item.description} />
    </Card>
  ))


const App = () => (
  <>
    <Layout>
      <Header>Header</Header>
      <Content>
      
        <div className="site-card-border-less-wrapper">
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          {items}
          </Space>
        </div>
        
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </>
);

export default App;
