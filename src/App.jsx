
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
import AboutPage from './Pages/AboutPage';
import LoginPage from './Pages/LoginPage';
import CartPage from './Pages/CartPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default App;
