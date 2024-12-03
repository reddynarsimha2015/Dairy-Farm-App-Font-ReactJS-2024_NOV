import React from "react";
const Home=()=>{
return (
    <>
    <div class="max-w-7xl mx-auto px-4 py-16">
    <div class="flex items-center justify-between space-x-8">
      <div class="w-1/2 space-y-6">
        <h1 class="text-4xl font-semibold text-gray-900">Welcome to Our YNTBR Masqati Product</h1>
        <p class="text-lg text-gray-600">
          Discover a wide range of products and services designed to enhance your life. Join us today and start exploring!
        </p>
        <a href="#learn-more" class="inline-block px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">Learn More</a>
      </div>

      <div class="w-1/2">
        <img src="https://bajraionline.com/wp-content/uploads/2019/07/masqatiwholemilk_bajraionlinesolutions.jpg" alt="Landing Image" class="w-full rounded-lg shadow-lg"/>
      </div>
    </div>
  </div>
    </>
)
};
export default  Home;