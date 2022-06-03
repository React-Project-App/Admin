import React from 'react'

function Order(cart) {
  console.log(cart.cart)
  const {Title,Photo,Amount,Curprice,SubTotal}=cart.cart;
  return (
    <div className='container  my-4 shadow'>
    <div className="row d-flex align-items-center">
      <img src={Photo} alt={Title}  className="col-1" />
      
      <label className='col-3 fw-bold text-primary'>Product : <span className='text-dark'>{Title}</span></label>
      <label  className='col-3 fw-bold text-primary'>Amount : <span className='text-dark'>{Amount}</span></label>
    
      
      <label  className='col-3 fw-bold text-primary'>Price : <span className='text-dark'>{Curprice}</span> </label>
      {/* <div className="col-12 text-end"> */}
      <label  className='col-2 fw-bold text-primary'>Total Price : <span className='text-dark'>{SubTotal}</span></label>
      {/* </div> */}
    </div>
    </div>
  )
}

export default Order
