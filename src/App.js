import { useSelector } from 'react-redux';
import './App.css';
import CartList from './Components/CartList';
import ProductList from './Components/ProductList';

function App() {
  return (
    <div className="App">
      <ProductList/>
      <CartList/>
    </div>
  );
}

export default App;
