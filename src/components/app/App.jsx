import { lazy, Suspense } from "react";
import css from "./App.module.css";

import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";

import Loader from "../loader/Loader";
import { Toaster } from "react-hot-toast";

const CatalogDetailsPage = lazy(() =>
  import("../../pages/catalogDetailsPage/CatalogDetailsPage")
);
const CatalogPage = lazy(() => import("../../pages/catalogPage/CatalogPage"));
const HomePage = lazy(() => import("../../pages/homePage/HomePage"));
const NotFoundPage = lazy(() =>
  import("../../pages/notFoundPage/NotFoundPage")
);

export const App = () => {
  return (
    <div className={css.container}>
      <Layout>
        <Toaster position="bottom-center" reverseOrder={false} />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CatalogDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
};
//   return clsx(css.link, isActive && css.active);
// };

// export const App = () => {
//   return (
//     <div className={css.container}>
//       <header className={css.header}>
//         <p className={css.logo}>
//           <span role="img" aria-label="computer icon">
//             💻
//           </span>{' '}
//           GoMerch Store
//         </p>

//         <nav className={css.nav}>
//           <NavLink to="/" className={buildLinkClass}>
//             Home
//           </NavLink>
//           <NavLink to="/about" className={buildLinkClass}>
//             About
//           </NavLink>
//           <NavLink to="/products" className={buildLinkClass}>
//             Products
//           </NavLink>
//         </nav>
//       </header>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:id" element={<ProductDetails />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// };
