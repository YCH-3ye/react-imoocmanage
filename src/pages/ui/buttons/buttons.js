import React, { Component } from 'react'
import { Card, Button } from 'antd';
import './index.less'
export default class Buttons extends Component {
  render() {
    return <div>
      <Card title="普通button" className="button-wrap">
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </Card>
    </div>
  }
}