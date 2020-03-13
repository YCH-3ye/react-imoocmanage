import React, { Component } from 'react'
import { Card, Col, Row, Modal} from 'antd';
import './index.less'
export default class Buttons extends Component {
  state={
    size: 'small',
    visible: false,
    currentImg: ''
  }

  handleClick = (item) => {
    console.log(item)
    this.setState({visible: true,currentImg: item})
  }
  render() {
    const dataList = [
      ['1.png', '2.png', '3.png', '4.png', '5.png'],
      ['6.png', '7.png', '8.png', '9.png', '10.png'],
      ['11.png', '12.png', '13.png', '14.png', '15.png'],
      ['16.png', '17.png', '18.png', '19.png', '20.png'],
      ['21.png', '22.png', '23.png', '24.png', '25.png']
    ]
    const imgItme = dataList.map(list => list.map(item => (
      <Card
      key={item}
      style={{marginBottom: 5}}
        cover={<img src="" src={'/gallery/'+item} />}
        onClick={() => this.handleClick(item)}
      >
        <Card.Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    )))
    return <div>
      <Row gutter={5} >
        <Col md={5}>
          {imgItme[0]}
        </Col>
        <Col md={5}>
          {imgItme[1]}
        </Col>
        <Col md={5}>
          {imgItme[2]}
        </Col>
        <Col md={5}>
          {imgItme[3]}
        </Col>
        <Col md={4}>
          {imgItme[4]}
        </Col>
      </Row>
      <Modal
        title="图片详情"
        visible={this.state.visible}
        footer={null}
        className="modal-wrap"
        onCancel={() => this.setState({visible: false})}
      >
        <img src={'/gallery/'+this.state.currentImg} alt=""/>
      </Modal>
    </div>
  }
}