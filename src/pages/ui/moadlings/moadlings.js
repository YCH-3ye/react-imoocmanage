import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd';
// import './index.less'
export default class Moadlings extends Component {
  state = {
    visible1: false,
    visible2: false,
    visible3: false,
    visible4: false
  }
  handleModal = (type) => {
    this.setState({
      [type] : true
    })
  }
  // handleOk = () => {
  //   this.setState({
  //     visible : false
  //   })
  // }
  // handleCancel = () => {
  //   this.setState({
  //     visible : false
  //   })
  // }
  handleConfirm = (type)=>{
    Modal[type]({
        title:'确认？',
        content:'你确定你学会了React了吗？',
        onOk(){
            console.log('Ok')
        },
        onCancel(){
            console.log('Cancel')
        }
    })
  }
  render() {
    return (
      <div>
        <Card title="Modal" className="button-wrap">
          <Button type="primary" onClick={() => this.handleModal('visible1')}>打开弹框</Button>
          <Button type="primary" onClick={() => this.handleModal('visible2')}>top20弹框</Button>
        </Card>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Modal
          title="正常Modal"
          visible={this.state.visible1}
          onOk={() => {this.setState({visible1: false})}}
          onCancel={() => {this.setState({visible1: false})}}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Modal
          title="Modal-top20"
          style={{'top': '20px'}}
          visible={this.state.visible2}
          onOk={() => {this.setState({visible2: false})}}
          onCancel={() => {this.setState({visible2: false})}}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Card title="Modal" className="button-wrap">
          <Button type="primary" onClick={() => this.handleConfirm('info')}>info</Button>
          <Button type="primary" onClick={() => this.handleConfirm('success')}>success</Button>
          <Button type="primary" onClick={() => this.handleConfirm('warning')}>warning</Button>
          <Button type="primary" onClick={() => this.handleConfirm('error')}>error</Button>
        </Card>
      </div>
    )
  }
}