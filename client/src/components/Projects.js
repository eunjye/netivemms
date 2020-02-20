import React, { Component, Fragment } from 'react';

// run
class Member extends React.Component {
  state = {
    projects: ''
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
    .then(res => this.setState({projects: res}))
    .catch(err => console.log(err));
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
      
  callApi = async () => {
    const response = await fetch('/api/projects');
    const body = await response.json();
    return body;
  }
  
  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  };
    

  render() {
    return (
      <table className="tbl_basic" width="100%">
        <colgroup>
          <col width="25%"></col>
          <col width="25%"></col>
          <col width="25%"></col>
          <col width="25%"></col>
        </colgroup>
        <thead>
          <tr>
            <th scope="col">사원번호</th>
            <th scope="col">프로젝트 고유번호</th>
            <th scope="col">투입일</th>
            <th scope="col">철수일</th>
          </tr>
        </thead>
        <tbody>
        {
          this.state.projects ? 
          this.state.projects.map(p => {
            // this.setState({p: {key: p.member_pin}})
            return(
              <tr>
                <td>{p.member_pin}</td>
                <td>{p.project_id}</td>
                <td>{p.date_in}</td>
                <td>{p.date_out}</td>
              </tr>
            )
          })
          : 
          <tr>
            <td colSpan="6">asdsdads<br></br><br></br>asADd</td>
          </tr>
        }
        </tbody>
      </table>
    )
  }
}

export default Member;