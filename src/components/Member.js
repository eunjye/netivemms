import React from 'react';


class Member extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.number}</td>
                <td>{this.props.team}</td>
                <td>{this.props.name}</td>
                <td>{this.props.rank}</td>
            </tr>
        )
    }
}

export default Member;