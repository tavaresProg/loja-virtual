import SearchBar from "../SearchBar/SearchBar";
import CartButton from "../CartButton/CartButton";
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="title">
          <h1>Smart Mart</h1>
        </div>
        <SearchBar />
        <CartButton/>
      </div>
    </header>
  );
}

export default Header;