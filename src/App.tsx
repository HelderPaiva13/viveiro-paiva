import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './vite.svg'
import './App.css'
import Header from './components/Header'
import ProductList from './components/ProductList'

function App() {
  
  return (
   <div>
    <Header />
    <ProductList />
   </div>
  );
};

export default App
