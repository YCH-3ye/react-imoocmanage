import React, { Component } from 'react'
import Child from './Child'
import {Button} from 'antd'

export default class Life extends Component {
  constructor(props) {
    super(props)
    this.state ={
      count: 0
    }
  }
  // state ={
  //   count: 0
  // }
  hanldeAdd() {
    this.setState({
      count : this.state.count + 1
    })
  }
  jthanldeAdd = () => {
    this.setState({
      count : this.state.count + 1
    })
  }
  render() {
    return (<div>
      <Button onClick={this.jthanldeAdd}>点我一下</Button>
      <button onClick={this.hanldeAdd.bind(this)}>点我一下</button>
      <p>{this.state.count}</p>
      <Child count={this.count}></Child>
    </div>)
  }
}