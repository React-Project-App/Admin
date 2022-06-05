import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import './CssFiles/Style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import AddProducts from './Pages/AddProduct.jsx/AddProducts';
import AsideBar from './Component/AsideBar';
import NavBar from './Component/NavBar/NavBar';
import Dashboard from './Pages/Dashboard/Dashboard';
import ListProduct from './Pages/ListProduct.jsx/ListProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../src/CssFiles/LoadingStyle.css'
import UpdateProductt from './Pages/UpdateProduct/UpdateProduct';
import AddPost from './Pages/AddPost/AddPost';
import AddMember from './Pages/AddMember/AddMember';
import Messages from './Pages/Messages/Messages';
import MessageContent from './Pages/MessageContent/MessageContent';
import Users from './Pages/Users/Users';
import Order from './Pages/Order/Order';
import { useSelector } from 'react-redux';

function App() {
  const user=useSelector(state=>state.LoginAdmin)

  return (
    
   
   <BrowserRouter>
   <ToastContainer/>
   <NavBar/>
    <AsideBar/>
   <Routes>
     <Route path='/login'   element={<Login/>}/>
     <Route path='*'   element={<Navigate to={"Login"}/>}/>
     <Route path='/'   element={<Login/>}/>
     <Route path='/AddProduct' element={ user!==null &&<AddProducts/>}/>
     <Route path='/Dashboard' element={user!==null &&<Dashboard/>}/>
     <Route path='/ListProduct' element={user!==null &&<ListProduct/>}/>
     <Route path='/updateproducts/:Id' element={user!==null &&<UpdateProductt/>}/>
     <Route path='/addpost' element={user!==null &&<AddPost/> }/>
     <Route path='/AddMember' element={user!==null &&<AddMember/>}/>
     <Route path='/Messages' element={user!==null &&<Messages/>}/>
     <Route path='/Answer/:Id' element={user!==null &&<MessageContent/>}/>
     <Route path='/ListUsers' element={user!==null &&<Users/>}/>
     <Route path='/Order/:Id' element={user!==null &&<Order/>}/>

   </Routes>
   </BrowserRouter>
  
  );
}

export default App;
