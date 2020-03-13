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
import Tabs from './pages/ui/tabs/tabs'
import Gallery from './pages/ui/gallery/gallery'
import Nomatch from './pages/nomatch/nomatch'




export default class Router extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route  path="/" render={() =>
              <Admin>
                <Switch>
                  <Route path="/admin/home" component={Home}></Route>
                  <Route path="/admin/ui/buttons" component={Buttons}/>
                  <Route path="/admin/ui/modals" component={Moadlings}/>
                  <Route path="/admin/ui/loadings" component={Loadings}/>
                  <Route path="/admin/ui/notification" component={Notic}/>
                  <Route path="/admin/ui/messages" component={Messages}/>
                  <Route path="/admin/ui/tabs" component={Tabs}/>
                  <Route path="/admin/ui/gallery" component={Gallery}/>
                  <Route path="/admin/form/login" component={Login}/>
                  <Route excat component={Nomatch}></Route>
                  <Redirect excat path="/" to="/admin/home"/>
                </Switch>
              </Admin>
            }/>
          </Switch>
        </App>
      </HashRouter>
    )
  }
}