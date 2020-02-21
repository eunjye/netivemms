import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Login, MemberList } from './pages';
import Header from './components/Header';
import Projects from './components/Projects';
import history from './history';

import './scss/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/member-list" component={MemberList}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
