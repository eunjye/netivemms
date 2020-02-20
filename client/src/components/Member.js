import React, { Component } from 'react';

// set phone number
function setPhoneNum(_phone) {
  const phone = [
    _phone.substr(0, 3),
    _phone.substr(3, 4),
    _phone.substr(7, 4)
  ];
  return (phone[0] + '-' + phone[1] + '-' + phone[2]);
}

// set birthday
function setBirth(_birth) {
  const _date = _birth.split('T')[0]
    , date = _date.split('-');
  return (date[0] + '년 ' + date[1] + '월 ' + date[2] + '일');
}

// run
class Member extends React.Component {
  state = {
    birth: '',
    phone: ''
  }
  componentDidMount() {
    this.setState({birth: setBirth(this.props.birth)});
    this.setState({phone: setPhoneNum(this.props.phone)});
  }

  render() {
    return (
      <tr>
        <td>{this.props.pin}</td>
        <td>{this.props.name}</td>
        <td>{this.props.gender}</td>
        <td>{this.state.birth}</td>
        <td>{this.state.phone}</td>
        <td>{this.props.address}</td>
      </tr>
    )
  }
}

export default Member;