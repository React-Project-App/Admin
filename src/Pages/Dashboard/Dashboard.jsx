import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllProduct } from '../../Actions/ListProduct'
import { DeleteProduct, DeleteUser, GetAllUsers } from '../../Actions/ListUsers'
import {FaUserAlt} from 'react-icons/fa'
import { GetOrders } from '../../Actions/TotalOrder'
import { Link } from 'react-router-dom'
function Dashboard() {
    const dispatch=useDispatch()
    // dispatch(GetAllProduct())
    useEffect(_=>{
        dispatch(GetAllProduct())
        dispatch(GetAllUsers())
       dispatch(GetOrders())
    },[])
    const products=useSelector(state=>state.ListProduct)
    const Orders=useSelector(state=>state.Orders)
    const Users=useSelector(state=>state.ListUsers)
    const {createdAt}=Orders;
    let dateCheckOut = new Date();
  if(createdAt){
    dateCheckOut.setTime(createdAt.seconds * 1000);}

    
  return (
    Users.length>0?(
      
    <main className="container d-flex  flex-column p-2 w-100">
    <div className="allds row w-100 d-flex justify-content-around pt-5 ms-1">
      <div className="dsh col-lg-3 col-md-3 col-sm-7 me-lg-5 me-md-5 row">
        <div className="icon col-4 pt-3">
            <FaUserAlt className='icons'/>
          
        </div>
        <div className="col-8 text-start d-flex justify-content-center flex-column">
          <p>Number of Users</p>
          <p className="nbr text-center">{Users.length} <span className="text-dark">User</span></p>
        </div>
      </div>
      <div className="dsh col-lg-3 col-md-3 col-sm-7 me-lg-5 me-md-5 row container">
        <div className="icon col-4 pt-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bc bi-cart-check-fill" viewBox="0 0 16 16">
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
          </svg>
        </div>
        <div className="col-8 text-start d-flex justify-content-center flex-column">
          <p>Total Orders</p>
          <p className="nbr text-center">{Orders.length}</p>
        </div>
      </div>
      <div className="dsh col-lg-3 col-md-3 col-sm-7 row ">
        <div className="icon col-4 pt-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bc bi-shop" viewBox="0 0 16 16">
            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
          </svg>
        </div>
        <div className="col-8 text-start d-flex justify-content-center flex-column">
          <p>Total Products</p>
          <p className="nbr text-center">{products.length}</p>
        </div>
      </div>
    </div>
    <h3 className=" ps-4">List Users</h3>
    <div className="  d-flex  flex-column  pt-3 w-100 container h-auto">
      <table className="table "> 
      <tbody className="listor text-center"> 
          <tr> 
            <th>ID</th> 
            <th>Email</th>  
            <th>UsreName</th>   
            <th>Date</th>   
          </tr>              
         {(Orders.length>0)&&(
             Orders.map((order,key)=>{
                return( 
                    <tr key={key}>  
                    <td>{order.orderId}</td>  
                    <td>{order.email}</td>  
                    <td>{order.name}</td> 
                    <td>{dateCheckOut.toDateString()}</td>
                    <td><Link  to={`/Order/${order.id}`}
                    className='btn btn-success'
                    >
                      View Order
                      </Link>
                      </td> 

                    
                    </tr> )
             })
            
         )
         
         }                          
          
        
      </tbody>    
      </table>
    </div>
  </main>
  
  )
  
  :(
       <div className='d-flex justify-content-center align-items-center load'>
       <div className='loader'></div>
           </div>
  )
  )
}

export default Dashboard
