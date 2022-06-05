import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { initializeUseSelector } from 'react-redux/es/hooks/useSelector';
import { useParams } from 'react-router-dom'
import { GetOrders } from '../../Actions/TotalOrder'
import OrderCompo from "../../Component/Order/OrderCompo"

function Order() {
    const dispatch=useDispatch();
    const {Id}=useParams();
    useEffect(_=>{
       dispatch(GetOrders())
    },[])
    let cart=[];
    const Orders=useSelector(state=>state.Orders);
    if (Orders.length>0) {
        let t=[];
         t=Orders.filter(order=>order.id===Id);
         cart=t[0].cart;
    }
    return (cart.length>0)&&(
      cart.map(e=>{
     
      return ( <OrderCompo cart={e}/>)
      })
     )

}

export default Order
