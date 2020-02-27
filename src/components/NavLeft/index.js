import React, { Component } from 'react'
import menuConfig from '../../resource/menuConfig'
import { HashRouter, Link, Route } from 'react-router-dom'
import {Menu} from 'antd'
import './index.less'
const { SubMenu } = Menu;



export default class NavLeft extends Component {
  state = {
    MenuDom : ''
  }
  componentDidMount() {
    const MenuDom = this.deepMenuData(menuConfig)
    this.setState({
      MenuDom
    })
    console.log(MenuDom)
  }
  deepMenuData(data) {
    return data.map(item => {
      if(item.children) {
        return (
          <SubMenu key={item.key} title={item.title}>
            {this.deepMenuData(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.key}>
          <Link to={item.key}>
            {item.title}
          </Link>
        </Menu.Item>
      )
    })
  }



  render() {
    return (<div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt=""/>
          <h1>Imooc MC</h1>
        </div>
        <Menu theme="dark">
          {this.state.MenuDom}
        </Menu>
      </div>
    )
  }
}