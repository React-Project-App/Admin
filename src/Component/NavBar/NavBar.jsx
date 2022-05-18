import React from 'react'

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container">
      <a class="navbar-brand bg-white fw-bold ms-4" href="index.html">
        <span class="span">Admin</span>
        <span class="span">K</span>OULCHI<span class="span">.</span>
      </a>
      <a class="  bg-transparent border-0 shadow-none" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-list bg-transparent" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </a>
      <div class="pucadm pe-3  ps-4 ms-auto">
          <img src="fusacchia.jpg" alt=""/> 
      </div>
    </div>
  </nav>
  )
}

export default NavBar
