import React, { Component } from 'react'
import { HashRouter, Link, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Login from './pages/login/login'
import Admin from './admin'
import Home from './pages/home/home'
import Buttons from './pages/ui/buttons/buttons'
import Nomatch from './pages/nomatch/nomatch'



export default class Router extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/" render={() =>
              <Admin>
                <Switch>
                  <Route path="/admin/home" component={Home}></Route>
                  <Route path="/admin/ui/buttons" component={Buttons}/>
                  <Redirect excat path="/login" to="/home"/>
                  <Route  component={Nomatch}></Route>
                </Switch>
              </Admin>
            }/>
          </Switch>
        </App>
      </HashRouter>
    )
  }
}