import React, { Component } from 'react'
import { Row, Col  } from 'antd'
import Header from './components/Header/'
import Footer from './components/Footer/'
import NavLeft from './components/NavLeft/'
import './style/common.less'

export default class Admin extends Component {
  render()  {
    return (
    <Row className="container">
      <Col className="navleft" span={3}>
        <NavLeft></NavLeft>
      </Col>
      <Col className="mian" span={21}>
        <Header className="header"></Header>
        <Row className="content">
          {this.props.children}
        </Row>
        <Footer className="footer"></Footer>
      </Col>
    </Row>
    )
  }
}