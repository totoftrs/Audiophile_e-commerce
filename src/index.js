import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from './store';
import App from './App';
import Headphones from './pages/Headphones';
import Earphones from './pages/Earphones'
import Speakers from './pages/Speakers';
import Details from './pages/Details';
import Checkout from './pages/Checkout';
import { Provider } from 'react-redux';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} exact />
        <Route path="/headphones" element={<Headphones/>} />
        <Route path="/earphones" element={<Earphones/>} />
        <Route path="/speakers" element={<Speakers/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="product/:id" element={<Details/>} />
      </Routes>
    </BrowserRouter>
   </Provider>

);