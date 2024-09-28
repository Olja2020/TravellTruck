import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo.jsx";
import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.headerSection}>
      <header className={css.headerWrapper}>
        <div className={css.headerWrapperLogo}>
          <Logo />
        </div>
        <nav className={css.nav}>
          <div className={css.container_links}>
            <NavLink className={css.link} to="/">
              Home
            </NavLink>
            <NavLink className={css.link} to="/catalog">
              Catalog
            </NavLink>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
