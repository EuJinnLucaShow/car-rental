import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './components/Layout/Layout';

const Home = lazy(() => import('pages/HomePage/HomePage'));
const Catalog = lazy(() => import('pages/CatalogPage/CatalogPage'));
const Favorites = lazy(() => import('pages/FavoritePage/FavoritePage'));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
