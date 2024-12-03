import React from 'react';
import { ProductService } from '../services/ProductService';
import { useState } from 'react';
import { useEffect } from 'react';
const ShowProduct=()=> {
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        (async()=>{
            try{
 let resp=await ProductService.getAllProducts();
console.log(resp.data);
if(resp.status===200){
    setProducts(resp.data);
}
            }
            catch(e){
console.log(e);
            }
        })();
    },[]);
    return (
       
     <>
     
<div className="container mx-auto py-8 px-5">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {
products && products.map(item=>{
  return(
    <div  key={item.productid} class="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
    <img class="w-full h-48 object-cover" src={item.imageUrl}/>
    <div class="p-4">
        <h2 class="text-xl font-semibold text-gray-800">{item.productname}</h2>
        <p class="text-gray-600 mt-2">{item.nuriationalinfo}</p>
        <pre>Fat:{item.fat}</pre>
        <pre>Energy:{item.energy}</pre>
        <pre>protien:{item.protien}</pre>
        <pre>price:{item.price}</pre>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">Buy Now</button>
         
        </div>
</div>
  )
  
})

  }


    </div>
    </div>

     </>
    )
  };
  
  export default ShowProduct;