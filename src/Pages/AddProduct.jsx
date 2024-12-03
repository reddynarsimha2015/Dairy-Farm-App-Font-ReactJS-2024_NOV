import React, { useState } from "react";
import { ProductService } from "../services/ProductService";
import {useNavigate} from "react-router-dom"
const AddProduct=()=>{
const navigate=useNavigate();
    const[product,setProduct]=useState({
        productname: "",
        price: "",
        imageUrl: "",
        energy: "",
        fat: "",
        protien: "",
        nuriationalinfo: ""
    });
    const updateForm = (e) => {
        setProduct(prevProduct => ({
            ...prevProduct, // Spread the previous product object
            [e.target.name]: e.target.value // Update the specific field
        }));
    };

    const submitForm=async(e)=>{
        console.log('-------');
        e.preventDefault();
        try{
let  response=await ProductService.addProduct(product);
     if(response.status===201){
        navigate('/admin');
     }
     else{
        navigate('/');
     }
        }
       catch(e){
        console.log(e);
       }
    };
return (
    <>
    <div class="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
    <h2 class="text-2xl font-semibold text-gray-800 mb-6">Add New Product</h2>

    <form onSubmit={e=>submitForm(e)} method="POST">
      
      
    <div class="mb-4">
        <label for="productname" class="block text-gray-700 font-medium">Productname</label>
        <input  type="productname" id="productname" name="productname"
        value={product.productname}
        onChange={e=>updateForm(e)}
         class="mt-1 block w-full px-4 py-2 border border-gray-300 
        rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter productname " required/>
      </div>
    
      <div class="mb-4">
        <label for="imageUrl" class="block text-gray-700 font-medium">Image URL</label>
        <input  type="text" id="imageUrl" name="imageUrl"
        value={product.imageUrl}
        onChange={e=>updateForm(e)}
         class="mt-1 block w-full px-4 py-2 border border-gray-300 
        rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter image URL" required/>
      </div>

      
      <div class="mb-4">
        <label for="price" class="block text-gray-700 font-medium">Price</label>
        <input type="number" id="price" name="price" value={product.price}
        onChange={e=>updateForm(e)}
        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 
        focus:ring-indigo-500" placeholder="Enter product price" required/>
      </div>

    
      <div class="mb-4">
        <label for="fat" class="block text-gray-700 font-medium">Fat (g)</label>
        <input  type="text" id="fat" name="fat" value={product.fat}
        onChange={e=>updateForm(e)}
        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none 
        focus:ring-2 focus:ring-indigo-500" placeholder="Enter fat content in grams" required/>
      </div>

      
      <div class="mb-4">
        <label for="energy" class="block text-gray-700 font-medium">Energy</label>
        <input  type="text" id="energy" name="energy" value={product.energy}
        onChange={e=>updateForm(e)}
        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none 
        focus:ring-2 focus:ring-indigo-500" placeholder="Enter energy" required/>
      </div>

    
      <div class="mb-4">
        <label for="protien" class="block text-gray-700 font-medium">Protien</label>
        <input  type="text" id="protien" name="protien" value={product.protien}
        onChange={e=>updateForm(e)}
        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none 
        focus:ring-2 focus:ring-indigo-500" placeholder="Enter protein" required/>
      </div>

      <div class="mb-6">
        <label for="nuriationalinfo" class="block text-gray-700 font-medium">Description</label>
        <textarea  type="text" id="nuriationalinfo" name="nuriationalinfo" value={product.nuriationalinfo}
        onChange={e=>updateForm(e)}
        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none 
        focus:ring-2 focus:ring-indigo-500" placeholder="Enter protein content in grams" required/>
      </div>

      
      <div>
        <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Add Product
        </button>
      </div>
    </form>
  </div>
    </>
)
};
export default  AddProduct;