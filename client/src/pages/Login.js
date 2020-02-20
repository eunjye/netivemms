import React from 'react';
import { Redirect } from 'react-router-dom';

const Login = () => {
  let _flag = false;
  // function checkLogin() {
  //   _flag = true;
  //   if (!!_flag) {
  //     history.push("/member-list")
  //   };
  // }
  return (
    <div className="login-wrap">
      <div className="box-basic">
        <h1 className="tit-dep1">[ne]MMS</h1>
        <input type="text" placeholder="ID" title="ID를 입력해 주세요." className="textbox" id="inpID"></input>
        <input type="password" placeholder="Password" title="Password를 입력해 주세요." className="textbox" id="inpPW"></input>
        <button type="button" onClick={''} className="btn-point size-l">LOGIN</button>
        {/* redirect 어케함 */}
      </div>
    </div>
  );
};

export default Login;