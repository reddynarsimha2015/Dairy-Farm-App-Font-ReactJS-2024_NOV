import React, { useEffect, useState } from "react";
import {Link}  from "react-router-dom";
import { ProductService } from '../services/ProductService';
const AdminProduct=()=>{
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
    const clickDelete= async (productd)=>{
       alert(productd);
        try{
            let resp=await ProductService.deleteProduct(productd);
           console.log(resp.data);
           if(resp.status===200){
            let resp=await ProductService.getAllProducts();
            if(resp.status===200){
                setProducts(resp.data);
            }
           }
                       }
                       catch(e){
           console.log(e);
                       }
    };
return (
    <>
    <div className="p-5">
        <Link to={'/add-product'} className="bg-green-500 text-white px-4 py-2 rounded-full">Create</Link>
    </div>
     <div class="overflow-x-auto bg-white shadow-lg rounded-lg">
    <table class="min-w-full table-auto">
      <thead class="bg-gray-800 text-white">
        <tr>
          <th class="px-4 py-2 text-left">ID</th>
          <th class="px-4 py-2 text-left">Name</th>
          <th class="px-4 py-2 text-left">Image</th>
          <th class="px-4 py-2 text-left">Fat (g)</th>
          <th class="px-4 py-2 text-left">Calories</th>
          <th class="px-4 py-2 text-left">Protein (g)</th>
          <th class="px-4 py-2 text-center">Action</th>
        </tr>
      </thead>
      <tbody>
      {
        products && products.map((item,index:Number)=>{
            return(
                <tr  key={item.productid} className="border-b hover:bg-gray-100">
                <td class="px-4 py-2">{index+1}</td>
                <td class="px-4 py-2">{item.productname}</td>
                <td class="px-4 py-2">
                  <img class="w-12 h-12 object-cover rounded-full" src={item.imageUrl} alt="Apple"/></td>
                <td class="px-4 py-2">{item.fat}</td>
                <td class="px-4 py-2">{item.energy}</td>
                <td class="px-4 py-2">{item.protien}</td>
                <Link to={`/edit-product/${item.productid}`} className="bg-blue-500 text-white px-4 py-2 rounded-full">update</Link>
                <button onClick={e=>clickDelete(item.productid)} className="bg-red-500 text-white px-4 py-2 rounded-full">Delete</button>
              </tr>
            )
        })
      }
        
       
      </tbody>
    </table>
  </div>
    </>
)
};
export default  AdminProduct;