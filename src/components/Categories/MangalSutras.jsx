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

const MangalSutras = () => {



const[MangalSutrasData,setMangalSutrasData]=useState([]);

const fetchPost = async () => {
     
  await getDocs(collection(db,"mangalsutras"))
      .then((querySnapshot)=>{               
          const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id }));
          setMangalSutrasData(newData);                
          console.log(MangalSutrasData, newData);
      })
    }

      
useEffect(()=>{
    fetchPost();
}, [])
 

  
   
    
  
    return (
    <Helmet title='MangalSutras'>
    
    <div className='Products_display'>
                              <div className='container'>
                              <div className='row row-cols-3'>
                              {MangalSutrasData?.map(MangalSutrasData=>(
                   <div className='product-card' key={MangalSutrasData.id}>
  
                          <div className='product-img'>
                                  <img src={MangalSutrasData.img}/>
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
  
  export default MangalSutras;
  
