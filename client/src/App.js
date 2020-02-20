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
      members: '',
      completed: 0,
      hey: false
    }
    this.sayHey = this.sayHey.bind(this);
  }
  // state = {
  //   members: '',
  //   completed: 0
  // }
    
  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
    .then(res => this.setState({members: res}))
    .catch(err => console.log(err));
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
    
  callApi = async () => {
    const response = await fetch('/api/members');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  };
  
  sayHey() {
    this.setState(state => ({
      hey: !state.hey
    }))
    if (!this.state.hey) alert('ss');
  }
  render() {
    return (
      <div className="App">
        <Header>
          <Route exact path="/" component={Login}/>
          <Route exact path="/member-list" component={MemberList}/>
        </Header>
        <table className="tbl_basic" width="100%">
          <colgroup>
            <col width="12%"></col>
            <col width="10%"></col>
            <col width="5%"></col>
            <col width="*%"></col>
            <col width="20%"></col>
            <col width="35%"></col>
          </colgroup>
          <thead>
            <tr>
              <th scope="col">사원번호<button onClick={this.sayHey}>버튼</button></th>
              <th scope="col">이름</th>
              <th scope="col">성별</th>
              <th scope="col">생년월일</th>
              <th scope="col">연락처</th>
              <th scope="col">주소</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.members ? 
              this.state.members.map(m => {
                return <Member key={m.pin} pin={m.pin} name={m.name} gender={m.gender} birth={m.birth} phone={m.phone} address={m.address} />
              }) 
              : 
              <tr>
                <td colSpan="6">준비중</td>
              </tr>
            }
          </tbody>
        </table>
        <Projects />
      </div>
    );
  }
}

export default App;
