import React from 'react'
import { Link } from 'react-router-dom'

function AsideBar() {
  return (
    <div className="offcanvas canvas offcanvas-start bg-transparent border-0 " tabIndex="0" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div className="offcanvas-body sidr p-0">
      <div className="  bg-white">
        <Link className="shadow-none menu border-top-2" to="/Dashboard"  >Dashboard</Link>
        <Link className="shadow-none menu border-top-2"  to="/AddProduct"   >Add Product</Link>
        <Link className="shadow-none menu border-top-2" to="/ListProduct"   >List Products</Link>
        <Link className="shadow-none menu border-top-2" to="/AddPost"   >Add a Post</Link>
      </div>
    </div>
  </div>
  )
}

export default AsideBar
