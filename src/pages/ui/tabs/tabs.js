import React, { Component } from 'react'
import { Card, Tabs} from 'antd';
import './index.less'
const { TabPane } = Tabs;
export default class Buttons extends Component {
  state={
    activeKey: '2',
    tabList: [
      {val: 'Content of Tab Pane 1', key: "1", tab: 'Tab 1'},
      {val: 'Content of Tab Pane 2', key: "2", tab: 'Tab 2'},
      {val: 'Content of Tab Pane 3', key: "3", tab: 'Tab 3'}
    ]
  }



  callback = (key) => {
    console.log(key);
    this.setState({
      activeKey: key
    })
  }
  handleTabs = (val) => {
    this.setState({
      activeKey: val
    })
  }
  add() {
    var tabList = this.state.tabList
    if(tabList.length === 0) {
      tabList.push( {val: 'Content of Tab Pane 1', key: "1", tab: 'Tab 1'})
    }
    tabList.push({
      val: 'Content of Tab Pane '+(+tabList[tabList.length-1].key + 1), key: +tabList[tabList.length-1].key + 1+'', tab: 'Tab '+(+tabList[tabList.length-1].key + 1)
    })
  }
  handleEdit = (val,action) => {
    console.log('action', action)
    if(action === 'add') {
      this[action]()
    }
    var tabList = this.state.tabList
    var currentIndex = this.state.activeKey
    if(currentIndex === val) {
      currentIndex = +currentIndex -1
    }
    if(currentIndex === 0) {
      currentIndex = tabList[0].key
    }
    tabList = tabList.filter((item)=> item.key !== val )
    console.log('tabList', tabList)
    if(tabList.length === 0) {
      this.setState({
        activeKey: '',
        tabList
      })
      return
    }
    this.setState({
      activeKey: currentIndex.toString(),
      tabList
    })
  }
  render() {
    return <div>
      <Card title="tabs使用" className="button-wrap">
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </Card>
      <Card title="tabs使用" className="button-wrap">
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </Card>
      <Card title="tabs禁用使用" className="button-wrap">
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="Tab 1" disabled key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </Card>
      <Card title="tabs垂直使用" className="button-wrap">
        <Tabs defaultActiveKey="1" tabPosition='left' style={{ height: 220 }}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </Card>
      <Card title="tabs删除添加" className="button-wrap">
        <Tabs
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.handleEdit}
          onChange={this.handleTabs}>
            {
              this.state.tabList.map((item) => {
                return (
                  <TabPane tab={item.tab} key={item.key} >
                    {item.val}
                  </TabPane>
                )
              })
            }
        </Tabs>
      </Card>
    </div>
  }
}