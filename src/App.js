import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CartPage from './components/CartPage';

function App() {
  return (

    <BroswerRouter>
    <Routes>
      <Route path="/" element={<ProductListPage />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
    </Routes>
    </BroswerRouter>

  );
}

export default App;
