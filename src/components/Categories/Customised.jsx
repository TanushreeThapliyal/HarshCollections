import React,{useState,useEffect} from 'react';
import Header from '../Header/Header';
import ProductDetails from '../../pages/ProductDetails';
import {
  collection,
  query,
  onSnapshot,getDocs,addDoc
} from "firebase/firestore";
import Helmet from '../Helmet/Helmet'; 
import { db } from '../../firebase.config';

const Customised = () => {



const[CustomisedData,setCustomisedData]=useState([]);

const fetchPost = async () => {
     
  await getDocs(collection(db,"customised"))
      .then((querySnapshot)=>{               
          const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id }));
          setCustomisedData(newData);                
          console.log(CustomisedData, newData);
      })
    }

      
useEffect(()=>{
    fetchPost();
}, [])
 

  
   
    
  
    return (
    <Helmet title='Customised'>
    
    <div className='Products_display'>
                              <div className='container'>
                              <div className='row row-cols-3'>
                              {CustomisedData?.map(CustomisedData=>(
                   <div className='product-card' key={CustomisedData.id}>
  
                          <div className='product-img'>
                                  <img src={CustomisedData.img}/>
                          </div>        
  
                                  <div className='product-name'>
  
                           </div>
                           </div>
                          ))
                      }
                      </div>
                      </div>
                      </div>
                      
    </Helmet>
    )
                    }
  
  export default Customised;
  
