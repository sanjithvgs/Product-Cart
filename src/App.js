import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CartPage from './components/CartPage';
import ErrorPage from './components/ErrorPage';
import ProductListPage from './components/ProductListPage';
import Header from './components/Header';

function App() {
  return (

    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<ProductListPage />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path='*' element={<ErrorPage/>}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
