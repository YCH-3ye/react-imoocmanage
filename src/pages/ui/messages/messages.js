import React, { Component } from 'react'
import { Card, Button, message} from 'antd';
import './index.less'
export default class Buttons extends Component {
  state={
    size: 'small'
  }
  handleClick = (type) => {
    message[type](type)
  }
  render() {
    return <div>
      <Card title="普通button" className="button-wrap">
        <Button type="primary" onClick={() => this.handleClick('success')}>success</Button>
        <Button type="info" onClick={() => this.handleClick('info')}>info</Button>
        <Button type="warning" onClick={() => this.handleClick('warning')}>warning</Button>
        <Button type="error" onClick={() => this.handleClick('error')}>Error</Button>
        <Button type="error" onClick={() => this.handleClick('loading')}>loading</Button>
      </Card>
    </div>
  }
}