import React from 'react'


function Login() {
  return (
    <div class=" container  pt-5 mt-5">
    <div class="d-flex  justify-content-center">
      <h1 class="h1"><span class="span">K</span>OULCHI<span class="span">.</span></h1>
    </div>
    <form class="row mt-5  d-flex  justify-content-center"> 
        <div class="mb-4 mt-3 col-lg-7 col-md-7 d-flex  justify-content-center">
            <h2 class="borderH2">Login Admin</h2>
        </div>
        <div class="mb-4 col-lg-7 col-md-7 d-flex  justify-content-center">
            <input type="email" class="form-control  w-75 inp" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
        </div>
        <div class="mb-4 col-lg-7  col-md-7 d-flex  justify-content-center">
            <input type="password" class="form-control w-75 inp " id="exampleInputPassword1" placeholder="Password"/>
        </div>
        
        <div class="mb-5 d-flex col-lg-7 col-md-7 justify-content-center">
            <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
    </form>
  </div>
  )
}

export default Login

