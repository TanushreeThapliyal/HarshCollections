import React, { useState, useEffect } from 'react';
import '../styles/shop.css';
import ProductDetails from './ProductDetails';
import {
  collection,
  query,
  onSnapshot, getDocs, addDoc
} from "firebase/firestore";
import { db } from "../firebase.config";
import Helmet from '../components/Helmet/Helmet';
import ProductCard from './ProductCard';

const Shop = () => {
  const [products, setProducts] = useState([])
  const fetchProduct = async (collectionName, title) => {
    return new Promise((resolve) => {
      getDocs(collection(db, collectionName))
        .then((querySnapshot) => {
          const result = querySnapshot.docs
            .map((doc) => ({ ...doc.data(), id: doc.id, collectionName }));
          resolve({ title, result });
        })
    })
  }

  useEffect(() => {
    const allCollection = [
      fetchProduct("bangles", "Bangles"),
      fetchProduct("bridals", "Bridals"),
      fetchProduct("customised", "Customised"),
      fetchProduct("earrings", "Earrings"),
      fetchProduct("fingerRings", "FingerRings"),
      fetchProduct("mangalsutras", "MangalSutras"),
      fetchProduct("mangtikkas", "Mangtika"),
      fetchProduct("naths", "Naths"),
      fetchProduct("necklaces", "Necklaces"),
    
    ];

    Promise.all(allCollection).then((responses) => {
      setProducts(responses)
    })
  }, [])

  console.log(products)


  return (
    <div className="container">
      <div className="row justify-content-center ">
        <div className="col-12 col-md-6 col-md-4" >
          {products.map(product => <>
            <Helmet title={product.title}>
              <div className='breadcumb_area'>
                <div className='heading'>
                  <h2> {product.title}</h2>
                </div>
              </div>
              <div className='Products_display'>
                <div className='container'>
                  <div className='row row-cols-3'>
                    {product.result.map(productResults =>
                      <ProductCard productData={productResults} />
                    )}
                  </div>
                </div>
              </div>
            </Helmet>
          </>)}
        </div>
      </div>
    </div>
  )
}

export default Shop;