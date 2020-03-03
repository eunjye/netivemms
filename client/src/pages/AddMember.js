import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class AddMember extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
    <Fragment>
      <Header current="member" />
        <h1 className="tit-dep1">멤버 등록</h1>
        <table className="tbl-basic type_v">
          <caption></caption>
          <colgroup>
            <col width="20%"></col>
            <col width="30%"></col>
            <col width="20%"></col>
            <col width="30%"></col>
          </colgroup>
          <tbody>
            <tr>
              <th scope="row"><label for="name">이름</label></th>
              <td><input type="text" className="textbox" id="name"></input></td>
              <th scope="row">성별</th>
              <td>
                <select className="select">
                  <option>여자</option>
                  <option>남자</option>
                </select>
              </td>
            </tr>
            <tr>
              <th scope="row"><label for="birth">생년월일</label></th>
              <td><input type="date" className="textbox" id="birth" placeholder="날짜 선택"></input></td>
              <th scope="row"><label for="phone">휴대폰번호</label></th>
              <td><input type="num" className="textbox" id="phone" placeholder="'-' 포함"></input></td>
            </tr>
            <tr>
              <th scope="row"><label for="address">집주소</label></th>
              <td colSpan="3"><input type="text" className="textbox" id="address"></input></td>
            </tr>
          </tbody>
        </table>

        <table className="tbl-basic type_v">
          <caption></caption>
          <colgroup>
            <col width="20%"></col>
            <col width="30%"></col>
            <col width="20%"></col>
            <col width="30%"></col>
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">고유번호</th>
              <td>UIDEV13M01</td>
              <th scope="row">근무여부</th>
              <td>
                <select className="select">
                  <option>재직</option>
                  <option>퇴직</option>
                </select>
              </td>
            </tr>
            <tr>
              <th scope="row">부서</th>
              <td>UI개발그룹</td>
              <th scope="row">팀</th>
              <td>
                <select className="select">
                  <option>운영</option>
                  <option>구축</option>
                </select>
              </td>
            </tr>
            <tr>
              <th scope="row">등급</th>
              <td>
                <select className="select">
                  <option>운영</option>
                  <option>구축</option>
                </select>
              </td>
              <th scope="row">직급</th>
              <td>
                <select className="select">
                  <option>부장</option>
                  <option>차장</option>
                  <option>과장</option>
                  <option>대리</option>
                  <option>주임</option>
                  <option>사원</option>
                </select>
              </td>
            </tr>
            <tr>
              <th scope="row"><label for="inDate">입사일</label></th>
              <td><input type="date" className="textbox" id="inDate"></input></td>
              <th scope="row"><label for="lastPromote">최종승진일</label></th>
              <td><input type="date" className="textbox" id="lastPromote" placeholder="날짜 선택"></input></td>
            </tr>
            <tr>
              <th scope="row">자격증</th>
              <td colspan="3">
                <input type="checkbox" id="license1" className="checkbox"></input>
                <label for="license1">정보처리기사</label>
                <input type="checkbox" id="license2" className="checkbox"></input>
                <label for="license2">정보처리산업기사</label>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="btns-wrap">
          <Link to="/member-list" class="btn-sub size-l">취소</Link>
          <button type="button" class="btn-point size-l">등록</button>
        </div>
    </Fragment>
    );
  };
};

export default AddMember;