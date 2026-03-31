<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";

import "./App.css";
import AuthProvider from "./context/AuthContext";
import ProductDetails from "./pages/ProductDetails";
=======
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import './App.css';
import AuthProvider from './context/AuthContext';
import ProductDetails from './pages/ProductDetails';
>>>>>>> 265b76bc114ea3012e188b25acad1d36574a8d69

function App() {
  return (
    <AuthProvider>
<<<<<<< HEAD
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
        </div>
=======
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/products/:id' element={<ProductDetails />} />
        </Routes>
      </div>
>>>>>>> 265b76bc114ea3012e188b25acad1d36574a8d69
    </AuthProvider>
  );
}

export default App;