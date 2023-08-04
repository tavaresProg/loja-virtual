import { useState, useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import './SearchBar.css'
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

function SearchBar() {

  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, SetSearchValue] = useState('');


  const handleSearch = async (form) => {
    form.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
    SetSearchValue('');
  }

  return (
    <form className="search__bar" onSubmit={handleSearch}>
      {name}
      <input
        type="search"
        value={searchValue}
        placeholder="buscar produtos"
        className="seach__input"
        onChange={(e) => {
          SetSearchValue(e.target.value);
        }}
        required
      />

      <button type="submit" className="search__button">
        <BsSearch />
      </button>

    </form>
  )
}

export default SearchBar