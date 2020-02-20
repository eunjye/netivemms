import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Login, MemberList } from './pages';
import Header from './components/Header';
import Projects from './components/Projects';
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
          <Route exact path="/" component={Login} />
          <Route exact path="/member-list" component={MemberList}/>
      </div>
    );
  }
}

export default App;
