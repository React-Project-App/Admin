import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { DeleteProduct, GetAllProduct } from '../../Actions/ListProduct';

function ListProduct() {
  const navigate=useNavigate()
    const dispatch=useDispatch();
    useEffect(_=>{
        dispatch(GetAllProduct())
    },[])
const products=useSelector(state=>state.ListProduct)

  return (
      products.length>0?(
    <main class="container d-flex  flex-column p-2 w-100">
    <h2 class=" ps-4 text-center fw-bold">List Products</h2>
    <div class="  d-flex  flex-column  pt-3 w-100 container h-auto">
      <table class="table "> 
      <tbody class="listor text-center "> 
          <tr> 
            <th>Image</th> 
            <th>Title</th>  
            <th>Price</th>   
            <th>Cateroy</th>   
            <th>Delete</th>   
            <th>Update</th>
          </tr>     
          {
              (products.length>0)?
              ( products.map(product=>{
                
                    return( <tr>  
                        <td><img src={product.Photo} class="img-pro" alt={product.Title}/></td>  
                        <td>{product.Title}</td>  
                        <td>{product.Price}</td> 
                        <td>{product.Categorie}</td>
                        <td><a  class="del" onClick={_=>{
                            dispatch(DeleteProduct(product.id))
                        }}>delete</a></td>
                        <td><a  class="upd"
                        onClick={()=>{
                          navigate(`/updateproducts/${product.id}`)
                        }}
                        // to="/UpdateProduct"
                        >update</a></td>  
                    </tr>)

              })
                    ):console.log('')          }                                  
         
          
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

export default ListProduct
