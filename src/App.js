import React, { Component } from 'react';
import {HeaderBlock, FooterBlock } from './components/blocks';
import * as Page from './components/pages';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './components/styles/index.scss';
class App extends Component {
  render() {
    return (
      <div className="app">
        <HeaderBlock/>
          <Router>
            <Switch>
              <Route path="/tree/path/:id" component={Page.TreeNode}/>
              <Route path="/" component={Page.Path}/>
            </Switch>
          </Router>
        <FooterBlock/>
      </div>
    );
  }
}

export default App;
