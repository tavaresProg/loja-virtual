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

//https://www.youtube.com/watch?v=PbnaIlnOsr8&ab_channel=ManualdoDev 29:00