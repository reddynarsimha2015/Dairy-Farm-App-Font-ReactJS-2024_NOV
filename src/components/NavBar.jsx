import React from 'react';

const NavBar=()=> {
    return (
     <>
     <nav class="bg-blue-600 p-4">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <div class="text-white text-lg font-semibold">
        <img className='w-20' src="yntbr1.png"></img>
      </div>

     
      <div class="space-x-6">
        <a href="/" class="text-white hover:text-gray-300">Home</a>
        <a href="/show-products" class="text-white hover:text-gray-300">Product</a>
        <a href="/admin" class="text-white hover:text-gray-300">Admin</a>
      </div>
    </div>
  </nav>
     </>
    );
  }
  
  export default NavBar;