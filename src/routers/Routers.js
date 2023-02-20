  import {Routes,Route,Navigate} from 'react-router-dom';


import React from 'react';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Shop from '../pages/Shop';

import AddProducts from '../admin/AddProducts';
import AllProducts from '../admin/AllProducts';
import Dashboard from '../admin/Dashboard'; 
import Users from '../admin/Users';
import ProtectedRoute from './ProtectedRoute';
import Bangles from '../components/Categories/Bangles';
import Bridals from '../components/Categories/Bridals';
import Customised from '../components/Categories/Customised';
import Earrings from '../components/Categories/Earrings';
import FingerRings from '../components/Categories/FingerRings';
import MangalSutras from '../components/Categories/MangalSutras';
import Mangtika from '../components/Categories/Mangtika';
import Naths from '../components/Categories/Naths';
import Necklaces from '../components/Categories/Necklaces';
import Reviews from '../pages/Reviews';
import Contact from '../pages/Contact';


const Routers = () => {
  return (
  <Routes>
  <Route path='/' element={<Navigate to='home'/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='bridals' element={<Bridals/>}/>
    <Route path='bangles' element={<Bangles/>}/>
    <Route path='customised' element={<Customised/>}/>
    <Route path='earrings' element={<Earrings/>}/>
    <Route path='fingerrings' element={<FingerRings/>}/>
    <Route path='mangalsutras' element={<MangalSutras/>}/>
    <Route path='mangtikkas' element={<Mangtika/>}/>
    <Route path='naths' element={<Naths/>}/>
    <Route path='necklaces' element={<Necklaces/>}/>


    
    <Route path='shop/:id' element={<ProductDetails/>}/>
    <Route path='cart' element={<Cart/>}/>

    <Route path='reviews' element={<Reviews/>}/>
    <Route path='contact' element={<Contact/>}/>
    
    

    <Route path="/*" element={<ProtectedRoute/>}>

    <Route path="checkout" element={<Checkout/>} />
    <Route path="dashboard" element={<Dashboard/>} />
    <Route path="dashboard/all-products" element={<AllProducts/>} />
    <Route path="dashboard/add-product" element={<AddProducts/>} />
    <Route path="dashboard/users" element={<Users/>} />
    
    </Route>
    
    <Route path='login' element={<Login/>}/>
    <Route path='signup' element={<Signup/>}/>
  </Routes>
  );
};

export default Routers;
