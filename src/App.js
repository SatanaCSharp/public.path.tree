import React from 'react';
import * as Block from './components/blocks';
import * as Page from './components/pages';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './components/styles/index.scss';
function App() {
  return (
    <div className="app">
       <Router>
          <Block.Header/>
          <Switch>
            <Route path="/" component={Page.Tree}/>
          </Switch>
          <Block.Footer/>
       </Router>
    </div>
  );
}

export default App;
