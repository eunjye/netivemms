import React, { Component } from 'react';
import Member from './components/Member';
import './scss/App.scss';
class App extends Component {
  state = {
    members: '',
    completed: 0
  }
    
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
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>HI</h1>
        </header>
        <table className="tbl_basic" width="100%">
          <colgroup>
            <col width="12%"></col>
            <col width="10%"></col>
            <col width="10%"></col>
            <col width="*%"></col>
            <col width="12%"></col>
            <col width="35%"></col>
          </colgroup>
          <thead>
            <th scope="col">사원번호</th>
            <th scope="col">이름</th>
            <th scope="col">성별</th>
            <th scope="col">생년월일</th>
            <th scope="col">연락처</th>
            <th scope="col">주소</th>
          </thead>
          <tbody>
            {this.state.members ? this.state.members.map(m => {
              return <Member key={m.number} number={m.number} name={m.name} gender={m.gender} birth={m.birth} phone={m.phone} address={m.address} />
            }) : 
            <tr>
              <td colSpan="4">준비중</td>
            </tr>
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
