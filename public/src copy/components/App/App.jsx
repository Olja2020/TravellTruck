import './App.module.css';
import Layout from '../Layout/Layout';

//import { useDispatch, useSelector } from 'react-redux';
import { lazy, 
  //useEffect, Suspense 
} from 'react';
import { Route, Routes } from 'react-router-dom';



import { Toaster } from 'react-hot-toast';


const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const CamperDetailsPage = lazy(() => import('../../pages/CamperDetailsPage/CamperDetailsPage'));

export default function App() {
   

  return (
    <>
     
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CamperDetailsPage />}/>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
