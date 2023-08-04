import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';
import './CartItem.css';
import { BsCartXFill } from 'react-icons/bs'
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

function CartItem({ data }) {

  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, quantity, thumbnail, title, price } = data;

  const handleRemoveItem = () => {
    const existingItem = cartItems.find((item) => item.id === id);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        const updatedItems = cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCartItems(updatedItems);
      } else {
        const updatedItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedItems);
      }
    }
  }

  const calculateTotalPrice = () => {
    const existingItem = cartItems.find((item) => item.id === data.id);
    if (existingItem) {
      return formatCurrency(price * existingItem.quantity, 'BRL');
    }
    return formatCurrency(price, 'BRL');
  };

  return (
    <section className='cart-item'>
      <img
        className='cart-item-image'
        src={thumbnail}
        alt="imagem do produto"
      />
      <div className="cart-item-content">
        <h3 className='cart-item-title'>{title}</h3>
        <h3 className='cart-item-price'>{calculateTotalPrice()}</h3>
        <button
          onClick={handleRemoveItem}
          type='button'
          className='button__remove-item'>
          <BsCartXFill />
        </button>
      </div>
      <div className="quantity">{quantity}</div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;