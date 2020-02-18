import React, { Component } from 'react';


class Member extends React.Component {
    state = {
        birth: ''
    }
    componentDidMount() {
        const _birth = this.props.birth
            , _date = _birth.split('T')[0]
            , date = _date.split('-');
        this.setState({birth: date[0] + '년 ' + date[1] + '월 ' + date[2] + '일'});
    }

    render() {
        
        return (
            <tr>
                <td>{this.props.number}</td>
                <td>{this.props.name}</td>
                <td>{this.props.gender}</td>
                <td>{this.state.birth}</td>
                <td>{this.props.phone}</td>
                <td>{this.props.address}</td>
            </tr>
        )
    }
}

export default Member;