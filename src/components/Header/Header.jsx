import { NavLink } from 'react-router-dom';
import './header.css';
const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <NavLink to="/" className={'header-nav-link'}>
          Home
        </NavLink>
        <NavLink to="/movies" className={'header-nav-link'}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
