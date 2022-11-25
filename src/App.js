import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './components/homePage/Home';
import { Restaurant } from './components/restuarant/Restaurant';
import { Checkout } from './components/checkout/checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth } from './components/auth/auth';

import Payment from './components/checkout/payment';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={
        <>
        <Navbar />
        <Home />
      </>} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/restaurant/:id' element={<Restaurant />} />
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/payment' element={<Payment />}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
