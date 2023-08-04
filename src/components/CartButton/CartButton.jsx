import { useContext } from 'react'
import './CartButton.css'
import { BsCart4 } from 'react-icons/bs'
import AppContext from '../../context/AppContext'

function CartButton() {

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button
    onClick={ () => setIsCartVisible(!isCartVisible) }
      type='button'
      className='cart__button'>
      <BsCart4 />
      {cartItems.length > 0 && <span className='cart-status'></span>}
    </button>
  )
}

export default CartButton