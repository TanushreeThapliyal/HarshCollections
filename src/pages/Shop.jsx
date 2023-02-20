import React,{useState,useEffect} from 'react';
import Header from "../components/Header/Header";
import '../styles/shop.css';
import ProductDetails from './ProductDetails';
import {
  collection,
  query,
  onSnapshot,getDocs,addDoc
} from "firebase/firestore";
import {db} from "../firebase.config";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import Bangles from '../components/Categories/Bangles';
import Bridals from '../components/Categories/Bridals';
import Customised from '../components/Categories/Customised';
import Necklaces from '../components/Categories/Necklaces';
import Mangtika from '../components/Categories/Mangtika';
import MangalSutras from '../components/Categories/MangalSutras';
import FingerRings from '../components/Categories/FingerRings';
import Earrings from '../components/Categories/Earrings';
import Naths from '../components/Categories/Naths';

import { Col,Row,Container } from 'reactstrap';



const Shop = () => {

  // const[productsData,setProductsData]=useState(" ")


  // const handleFilter=(e)=>{
  //   const filterValue=e.target.value
  //   if(filterValue==='Bangles'){
  //     const filteredProducts=products.filter(item=>item.category==='Bangles');

  //     setProductsData(filteredProducts);
  //   }

  //   if(filterValue==='Bridals'){
  //     const filteredProducts=products.filter(item=>item.category==='Bridals');

  //     setProductsData(filteredProducts);
  //   }

  //   if(filterValue==='Customised'){
  //     const filteredProducts=products.filter(item=>item.category==='Customised');

  //     setProductsData(filteredProducts);
  //   }

  //   if(filterValue==='Earrings'){
  //     const filteredProducts=products.filter(item=>item.category==='Earrings');

  //     setProductsData(filteredProducts);
  //   }

  //   if(filterValue==='FingerRings'){
  //     const filteredProducts=products.filter(item=>item.category==='FingerRings');

  //     setProductsData(filteredProducts);
  //   }

  //   if(filterValue==='MangalSutras'){
  //     const filteredProducts=products.filter(item=>item.category==='MangalSutras');

  //     setProductsData(filteredProducts);
  //   }

  //   if(filterValue==='Mangtikas'){
  //     const filteredProducts=products.filter(item=>item.category==='Mangtikas');

  //     setProductsData(filteredProducts);
  //   }

  //   if(filterValue==='Naths'){
  //     const filteredProducts=products.filter(item=>item.category==='Naths');

  //     setProductsData(filteredProducts);
  //   }

  //   if(filterValue==='Necklaces'){
  //     const filteredProducts=products.filter(item=>item.category==='Necklaces');

  //     setProductsData(filteredProducts);
  //   }
  // };




return( 
<>
<div className="container ">

                <div className="row justify-content-center ">
                <div className="col-12 col-md-6 col-md-4" >
                <h2> Bangles</h2>
                <Bangles/>
</div>
</div>


<div className="row justify-content-center ">     
 <div className="col-12 col-md-6 col-md-4" >
<h2> Bridals</h2>
<Bridals/>
</div>
</div>

<div className="row justify-content-center ">                    
<div className="col-12 col-md-6 col-md-4" >
<h2> Customised</h2>
<Customised/>
</div>
</div>

<div className="row justify-content-center ">                    
<div className="col-12 col-md-6 col-md-4" >
<h2> Earrings</h2>
<Earrings/>
</div>
</div>

<div className="row justify-content-center ">                    
<div className="col-12 col-md-6 col-md-4" >
<h2> FingerRings</h2>
<FingerRings/>
</div>
</div>

<div className="row justify-content-center ">                    
<div className="col-12 col-md-6 col-md-4" >
<h2> MangalSutras</h2>
<MangalSutras/>
</div>
</div>

<div className="row justify-content-center ">                    
<div className="col-12 col-md-6 col-md-4" >
<h2> Mangtika</h2>
<Mangtika/>
</div>
</div>

<div className="row justify-content-center ">                    
<div className="col-12 col-md-6 col-md-4" >
<h2> Naths</h2>
<Naths/>
</div>
</div>

<div className="row justify-content-center ">                    
<div className="col-12 col-md-6 col-md-4" >
<h2> Nacklaces</h2>
<Necklaces/>
</div>
</div>

</div>


{/* <section>
            <Container>
              <Row>
                <Col lg='3' md='3'>
                  <div className="filter__widget">
                    <select onChange={handleFilter}>
                    <option> Filter By Category</option>
                      <option value="Bangles">Bangles</option>
                      <option value="Bridals">Bridals</option>
                      <option value="Earrings">Earrings</option>
                      <option value="FingerRings">FingerRings</option>
                      <option value="MangalSutras">MangalSutras</option>
                      <option value="Mangtikas">Mangtikas</option>
                      <option value="Naths">Naths</option>
                      <option value="Necklaces">Necklaces</option>
                      <option value="MCustomised">Customised</option>
                    </select>
                  </div>
                </Col>

                <Col lg='6' md='12'>
                <div className='search__box'>
                  <input type="text"
                   placeholder="Search........"
                   onChange={handleSearch}
                   />
                  <span><i class="ri-search-line"></i></span>
                </div>
                </Col>

                </Row>
                </Container>
</section> */}



</>

)
}

export default Shop;

 