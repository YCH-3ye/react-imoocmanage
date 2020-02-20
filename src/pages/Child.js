import React, { Component } from 'react'

export default class Life extends Component {
  constructor(props) {
    super(props)
    this.state ={
      count: 0
    }
  }
  componentWillMount() {
    console.log('componentWillMount1')
  }
  componentDidMount() {
    console.log('componentDidMount2')
  }
  componentWillReceiveProps(nextPropos) {
    console.log('componentWillReceiveProps')
    console.log(1, nextPropos)
  }
  shouldComponentUpdate(nextPropos) {
    console.log(2, nextPropos)
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  render() {
    return (<div>
      child {this.props.count}
    </div>)
  }
}