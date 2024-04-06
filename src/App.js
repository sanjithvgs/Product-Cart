import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CartPage from './components/CartPage';
import ErrorPage from './components/ErrorPage';
import ProductListPage from './components/ProductListPage';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (

    <Provider store={store}>

    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<ProductListPage />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path='*' element={<ErrorPage/>}></Route>
    </Routes>
    </BrowserRouter>

    </Provider>
  );
}

export default App;
