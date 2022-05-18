import React from 'react'
import { Link } from 'react-router-dom'

function AsideBar() {
  return (
    <div class="offcanvas canvas offcanvas-start bg-transparent border-0 " tabindex="0" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-body sidr p-0">
      <div class="  bg-white">
        <Link class="shadow-none menu border-top-2" to="/Dashboard"  >Dashboard</Link>
        <Link class="shadow-none menu border-top-2"  to="/AddProduct"   >Add Product</Link>
        <Link class="shadow-none menu border-top-2" to="/ListProduct"   >List Products</Link>
      </div>
    </div>
  </div>
  )
}

export default AsideBar
