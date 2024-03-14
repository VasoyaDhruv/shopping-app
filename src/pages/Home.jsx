import React, { useEffect, useState } from 'react'
import Product from '../components/common/Product';

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [posts , setPosts]  =  useState([]);

  async function fetchProductData(){
    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data)
    }
    catch(error){

    }
  }
  useEffect(() => {
    fetchProductData();
  },[])
  return (
    <div className=' text-black text-2xl'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4'>
        {
        posts.map((post) => (
          <Product key={post.id} post={post}/>
        ))
        }
      </div>
    </div>
  )
}

export default Home