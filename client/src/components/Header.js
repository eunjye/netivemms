import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="tab-basic">
        {
          this.props.current==='member' ? 
            <Link to="/member-list" className="tab-btn active" id="goMember">멤버</Link>
            :
            <Link to="/member-list" className="tab-btn" id="goMember">멤버</Link>
        }
        {
          this.props.current==='status'  ?
          <Link to="/status" className="tab-btn active" id="goStatus">현황</Link>
          :
          <Link to="/status" className="tab-btn" id="goStatus">현황</Link>
        }
        { this.props.current==='project' ?
          <Link to="/project" className="tab-btn active" id="goProject">프로젝트</Link>
          :
          <Link to="/project" className="tab-btn" id="goProject">프로젝트</Link>
        }
      </div>
    )
  }
}
    
export default Header;