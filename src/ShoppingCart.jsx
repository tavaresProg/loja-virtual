import './ShoppingCart.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Provider from './context/Provider';
import Cart from './components/Cart/Cart';

function ShoppingCart() {
  return (

    <Provider>
      <Header />
      <Products />
      <Cart />
    </Provider>

  );
}

export default ShoppingCart