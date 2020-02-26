import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class AddMember extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="modal-wrap">
        <h1 className="modal-tit">프로젝트 등록/수정</h1>
        <div class="modal-cont">
          <div class="form">
            <span class="form-label">프로젝트명</span>
            <div class="form-item">
              <select title="프로젝트명" class="select">
                <option>삼성화재 리뉴얼 프로젝트 1</option>
                <option>삼성화재 리뉴얼 프로젝트 2</option>
                <option>삼성화재 리뉴얼 프로젝트 3</option>
              </select>
            </div>
          </div>
          <div class="form">
            <label for="inDate" class="form-label">투입일</label>
            <div class="form-item">
              <input type="text" id="inDate" class="textbox" value="" readOnly="readonly" placeholder="투입일을 입력해주세요."></input>
            </div>
          </div>
          <div class="form">
            <label for="outDate" class="form-label">철수일</label>
            <div class="form-item">
              <input type="text" id="outDate" class="textbox" value="" readOnly="readonly" placeholder="철수일을 입력해주세요."></input>
            </div>
          </div>
        </div>
        <button onClick={this.closeModal}>닫기</button>
      </div>
    );
  };
};

export default AddMember;