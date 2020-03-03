import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Login, MemberList, Projects, Status, AddMember } from './pages';
import { Layout } from './components';
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
            <Layout>
              <Route exact path="/member-list" component={MemberList}/>
              <Route exact path="/status" component={Status}/>
              <Route exact path="/project" component={Projects}/>
              <Route exact path="/member-add" component={AddMember}/>
            </Layout>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
