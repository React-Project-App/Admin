import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { LoginAdmin } from "../../Actions/LoginAdmin";

function Login() {
  const dispatch = useDispatch();
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const Login=_=>{
    dispatch(LoginAdmin( email, password))
  }
  return (
    <div className=" container  pt-5 mt-5">
      <div className="d-flex  justify-content-center">
        <h1 className="h1">
          <span className="span">K</span>OULCHI<span className="span">.</span>
        </h1>
      </div>
      <form className="row mt-5  d-flex  justify-content-center">
        <div className="mb-4 mt-3 col-lg-7 col-md-7 d-flex  justify-content-center">
          <h2 className="borderH2">Login Admin</h2>
        </div>
        <div className="mb-4 col-lg-7 col-md-7 d-flex  justify-content-center">
          <input
            type="email"
            className="form-control  w-75 inp"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>
        <div className="mb-4 col-lg-7  col-md-7 d-flex  justify-content-center">
          <input
            type="password"
            className="form-control w-75 inp "
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e)=>{setPassword(e.target.value)}}
          />
        </div>

        <div className="mb-5 d-flex col-lg-7 col-md-7 justify-content-center">
          <button type="button" className="btn btn-primary" onClick={Login}>
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
