import React, { Component } from 'react'
import { Card, Button, Radio, Icon, Spin, Alert  } from 'antd';
import './index.less'
export default class Buttons extends Component {
  render() {
    const icon = <Icon type="loading"></Icon>
    return <div>
      <Card title="Spin使用" className="button-wrap">
        <Spin></Spin>
        <Spin delay="1000"></Spin>
        <Spin indicator={icon}></Spin>
        <Spin size="large"></Spin>
        <Spin description="loading"></Spin>
      </Card>
      <Card title="Spin Alert使用" className="button-wrap">
        <Spin tip="loding" spinning={false} wrapperClassName="spin-loading">
          <Alert message="Success Text" type="success">
            {/* <Spin indicator={icon}></Spin> */}
            
          </Alert>

        </Spin>
 
      </Card>
    </div>
  }
}