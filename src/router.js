import React, { Component } from 'react'
import { HashRouter, Link, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Login from './pages/login/login'
import Admin from './admin'
import Home from './pages/home/home'
import Buttons from './pages/ui/buttons/buttons'
import Moadlings from './pages/ui/moadlings/moadlings'
import Loadings from './pages/ui/loadings/loadings'
import Notic from './pages/ui/notic/notic'
import Messages from './pages/ui/messages/messages'
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
                  <Route path="/admin/ui/modals" component={Moadlings}/>
                  <Route path="/admin/ui/loadings" component={Loadings}/>
                  <Route path="/admin/ui/notification" component={Notic}/>
                  <Route path="/admin/ui/messages" component={Messages}/>
                  {/* <Route path="/admin/ui/loadings" component={loadings}/> */}
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