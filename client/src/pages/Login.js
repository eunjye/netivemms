import React from 'react';

const Login = () => {
  return (
    <div class="login-wrap">
      <div className="box-basic">
        <h1 className="tit-dep1">[ne]MMS</h1>
        <input type="text" placeholder="ID" title="ID를 입력해 주세요." className="textbox" id="inpID"></input>
        <input type="password" placeholder="Password" title="Password를 입력해 주세요." className="textbox" id="inpPW"></input>
        <button type="button" onClick="" class="btn-basic size-l">LOGIN</button>
      </div>
    </div>
  );
};

export default Login;