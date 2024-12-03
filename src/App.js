import logo from './logo.svg';
import './App.css';

import ShowProduct from './Pages/ShowProduct.jsx';
import AdminProduct from './Pages/AdminProduct.jsx';
import AddProduct from './Pages/AddProduct.jsx';
import EditProduct from './Pages/EditProduct.jsx';
import DeleteProduct from './Pages/DeleteProduct.jsx';
import Home from './Pages/Home.jsx';

import NavBar from './components/NavBar';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path={'/'}  element={<Home/>}/>
      <Route path={'/show-products'}  element={<ShowProduct/>}/>
      <Route path={'/admin'} element={<AdminProduct/>}/>
      <Route path={'/add-product'} element={<AddProduct/>}/>
      <Route path={'/edit-product/:productid'} element={<EditProduct/>}/>
      <Route path={'/delete-prooduct'} element={<DeleteProduct/>}/>

    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
