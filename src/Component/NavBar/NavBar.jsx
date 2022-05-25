import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogedInAdmin, SignOutAdmin } from "../../Actions/LoginAdmin";
import { authAdmin } from "../../FireBaseLoginConfig/FirebaseLoginConfig";

function NavBar() {
  const dispatch=useDispatch()
  useEffect(_=>{
    dispatch(LogedInAdmin())
  },[])
  const user=useSelector(state=>state.LoginAdmin)
  // console.log(user)
  const SignOut=_=>{
    dispatch(SignOutAdmin())
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand bg-white fw-bold ms-4" href="index.html">
          <span className="span">Admin</span>
          <span className="span">K</span>OULCHI<span className="span">.</span>
        </a>
        {user&&(
          <a
          className="  bg-transparent border-0 shadow-none"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="black"
            className="bi bi-list bg-transparent"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </a>
        )}
        

        <div className="pucadm pe-3  ps-4 ms-auto">
          {user&&(
            <a
            className="  bg-transparent border-0 shadow-none logOut text-decoration-none Pointer"
            onClick={SignOut}
          >
            Sign Out
          </a>
          )}
          
          {/* <img src="fusacchia.jpg" alt=""/>  */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
