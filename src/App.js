import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './components/Layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('pages/HomePage/HomePage'));
const Catalog = lazy(() => import('pages/CatalogPage/CatalogPage'));
const Favorites = lazy(() => import('pages/FavoritePage/FavoritePage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
