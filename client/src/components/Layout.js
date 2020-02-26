import React from 'react';
import { Link } from 'react-router-dom';

class Layout extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="container">
        {this.props.children}
      </div>
    )
  }
}
    
export default Layout;