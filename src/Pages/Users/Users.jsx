import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllProduct } from '../../Actions/ListProduct'
import { DeleteProduct, GetAllUsers } from '../../Actions/ListUsers'
import { GetOrders } from '../../Actions/TotalOrder'
function Users() {
    const dispatch=useDispatch()
    useEffect(_=>{
        dispatch(GetAllProduct())
        dispatch(GetAllUsers())
       dispatch(GetOrders())
    },[])
    const products=useSelector(state=>state.ListProduct)
    const Orders=useSelector(state=>state.Orders)
    const Users=useSelector(state=>state.ListUsers)

  return (
    Users.length>0?(
    <main className="container d-flex  flex-column p-2 w-100">
    
    <h3 className=" ps-4">List Users</h3>
    <div className="  d-flex  flex-column  pt-3 w-100 container h-auto">
      <table className="table "> 
      <tbody className="listor text-center"> 
          <tr> 
            <th>ID</th> 
            <th>Username</th>  
            <th>Email</th>   
            <th>delete</th>   
          </tr>              
         {(Users.length>0)&&(
             Users.map((user,key)=>{
                return( 
                    <tr key={key}>  
                    <td>{user.uid}</td>  
                    <td>{user.name}</td>  
                    <td>{user.email}</td> 
                    <td><a  className="del Pointer" onClick={_=>{
                        dispatch(DeleteProduct(user.uid))
                        // dispatch(DeleteUser(user.uid))
                    }}>delete</a></td>   
                    </tr> )
             })
            
         )
         
         }                          
          
        
      </tbody>    
      </table>
    </div>
  </main>):(
       <div className='d-flex justify-content-center align-items-center load'>
       <div className='loader'></div>
           </div>
  )
  )
}

export default Users
