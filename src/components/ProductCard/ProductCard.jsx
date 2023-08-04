import './ProductCard.css';
import propTypes from 'prop-types';
import { BsCartPlusFill } from 'react-icons/bs'
import formatCurrency from '../../utils/formatCurrency';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

function ProductCard({ data }) {

  const { title, thumbnail, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  // const handleAddCart = () => setCartItems([...cartItems, data]);

  const handleAddCart = () => {
    const existingItem = cartItems.find((item) => item.id === data.id);

    if (existingItem) {
      // Se o item com o mesmo ID já existir, atualize a quantidade
      const updatedItems = cartItems.map((item) =>
        item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      // Se o item com o mesmo ID não existir, adicione um novo item ao carrinho
      setCartItems([...cartItems, { ...data, quantity: 1 }]);
    }
  };


  return (
    <section className="product-card">

      <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="product" className='card__image' />

      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>
      <button
        onClick={handleAddCart}
        type="button"
        className="button__add-cart">
        <BsCartPlusFill />
      </button>

    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;