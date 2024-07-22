import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './pages/Shop';
import Shopcategory from './pages/Shopcategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/assets/banner_mens.png';
import women_banner from './Components/assets/banner_women.png';
import kids_banner from './Components/assets/banner_kids.png'
import Login from './pages/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<Shopcategory banner={men_banner} category="mens" />} />
          <Route path='/womens' element={<Shopcategory banner={women_banner} category="womens" />} />
          <Route path='/kids' element={<Shopcategory banner={kids_banner} category="kids" />} />
          <Route path='/product' element={<Product />} />
          <Route path=':productId' element={<Product />}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/logins' element={<Login />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
