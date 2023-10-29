import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Loader } from '../Loader/Loader';
import { Main } from './Layout.styled';

export default function Layout() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>
      <Footer />
    </>
  );
}
