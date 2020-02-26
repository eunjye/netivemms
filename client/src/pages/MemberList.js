import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Header, CreateTd, Layout } from '../components';
import { AddMember } from './modal';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root');

class MemberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: '',
      modallsOpen: false,
      arrMember: []
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modallsOpen: true});
  }

  closeModal() {
    this.setState({modallsOpen: false});
  }

  componentDidMount() {
    // this.timer = setInterval(this.progress, 20);
    this.callApi()
    .then(res => this.setState({members: res}))
    .catch(err => console.log(err));
  }

  componentDidUpdate() {
    const _td = document.getElementsByTagName('td');
    for (var i = 0; i < _td.length; i++) {
      _td[i].addEventListener('click', this.goMemberDetail, false);
    }
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    // debugger;
  }
    
  callApi = async () => {
    const response = await fetch('/api/members/work');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  };

  toggleRow(ts) {
    const _tr = ts.target.parentNode.parentNode;
    _tr.classList.toggle('hover');
    if (ts.target.checked) {
      // _arrMember = arrMember.map()
      // this.setState({arrMember:})
    } else {

    }
  }

  goMemberDetail(ts) {

  }

  render() {  
    return (
      <Fragment>
        <Header current="member" />
        <h1 className="tit-dep1">멤버 리스트</h1>
        <table className="tbl-basic full hover">
          <caption></caption>
          <colgroup>
            <col width="5%"></col>
            <col width="15%"></col>
            <col width="10%"></col>
            <col width="10%"></col>
            <col width="10%"></col>
            <col width="10%"></col>
            <col width="20%"></col>
            <col width="20%"></col>
          </colgroup>
          <thead>
            <tr>
              <th scope="col">선택</th>
              <th scope="col">사원번호</th>
              <th scope="col">팀</th>
              <th scope="col">이름</th>
              <th scope="col">직급</th>
              <th scope="col">등급</th>
              <th scope="col">입사일</th>
              <th scope="col">휴대폰번호</th>
            </tr>
          </thead>
          <tbody>
            {
              !!this.state.members ?
              this.state.members.map(m=>{
                return (
                  <tr>
                    <CreateTd 
                      key={m.member_pin} 
                      checkbox={
                        <input type="checkbox" id={m.member_pin} title="사원 선택" className="checkbox" onChange={this.toggleRow}></input>
                      }
                      pin={m.member_pin} 
                      team={m.team} 
                      name={'은지혜'}
                      position={m.position} 
                      grade={m.grade} 
                      date={m.date} 
                      tel={'01057584209'}
                    />
                  </tr>
                )
              })
              :
              <tr>
                <td colSpan="8">등록된 맴버가 없습니다.</td>
              </tr>
            }
          </tbody>
        </table>
        <div className="btns-wrap">
          <button type="button" className="btn-sub size-l">삭제</button>
          <button type="button" className="btn-point size-l" onClick={this.openModal}>멤버 등록</button>
          <Modal
            // className='size-s'
            isOpen={this.state.modallsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="멤버 등록하기"
          >
            <AddMember />
          </Modal>
        </div>
      </Fragment>
    );
  };
}
export default MemberList;