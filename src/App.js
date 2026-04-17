import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import User from './user';
import { Routes , Route } from 'react-router-dom';
import Product from './product';
import Layout from './layout';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/product" element={<Product />} />
    </Routes>
    </>
  );
}

export default App;
