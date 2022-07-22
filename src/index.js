import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from './store';
import App from './App';
import Headphones from './components/pages/Headphones';
import Earphones from './components/pages/Earphones'
import Speakers from './components/pages/Speakers';
import Details from './components/pages/Details';
import Checkout from './components/pages/Checkout';
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