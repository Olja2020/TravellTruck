import { Suspense } from "react";
import clsx from "clsx";
import Header from "../header/Header";
import { NavLink } from "react-router-dom";
import css from './Layout.module.css'
export const Layout = ({ children }) => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  <nav className={css.nav}>
    <NavLink to="/" className={buildLinkClass}>
      Home
    </NavLink>
    <NavLink to="/catalog" className={buildLinkClass}>
      Catalog
    </NavLink>
  </nav>;

  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
      <Header />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
