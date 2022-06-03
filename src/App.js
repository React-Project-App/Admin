import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    
   
   <BrowserRouter>
   <ToastContainer/>
   <NavBar/>
    <AsideBar/>
   <Routes>
     <Route path='/' element={<Login/>}/>
     <Route path='/AddProduct' element={<AddProducts/>}/>
     <Route path='/Dashboard' element={<Dashboard/>}/>
     <Route path='/ListProduct' element={<ListProduct/>}/>
     <Route path='/updateproducts/:Id' element={<UpdateProductt/>}/>
     <Route path='/addpost' element={<AddPost/>}/>
     <Route path='/AddMember' element={<AddMember/>}/>
     <Route path='/Messages' element={<Messages/>}/>
     <Route path='/Answer/:Id' element={<MessageContent/>}/>
     <Route path='/ListUsers' element={<Users/>}/>
     <Route path='/Order/:Id' element={<Order/>}/>

   </Routes>
   </BrowserRouter>
  
  );
}

export default App;
