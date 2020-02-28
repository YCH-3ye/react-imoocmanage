import React, { Component } from 'react'
import { Card, Button, Radio, Icon } from 'antd';
import './index.less'
export default class Buttons extends Component {
  state={
    size: 'small'
  }
  handleSizeChang = (e) => {
    const size = e.target.value
    this.setState({
      size
    })
  }
  render() {
    const ButtonGroup = Button.Group;
    return <div>
      <Card title="普通button" className="button-wrap">
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </Card>
      <Card title="图标button" className="button-wrap">
        <Button shape="circle" icon="search" />
        <Button icon="search">Search</Button>
        <Button type="dashed" shape="circle" icon="search" />
        <Button type="dashed" icon="search">
          Search
        </Button>
      </Card>
      <Card title="button大小" className="button-wrap">
        <Radio.Group value={this.state.size} style={{marginRight: '10px'}} onChange={this.handleSizeChang}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <Button type="primary" size={this.state.size}>
          Primary
        </Button>
        <Button size={this.state.size}>Normal</Button>
        <Button type="dashed" size={this.state.size}>
          Dashed
        </Button>
        <Button type="danger" size={this.state.size}>
          Danger
        </Button>
        <Button type="link" size={this.state.size}>
          Link
        </Button>
      </Card>

      <Card title="button组">
        <ButtonGroup>
          <Button type="primary">
            <Icon type="left" />
            Go back
          </Button>
          <Button type="primary">
            Go forward
            <Icon type="right" />
          </Button>
        </ButtonGroup>
      </Card>
      
    </div>
  }
}