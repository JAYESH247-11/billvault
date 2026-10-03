import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MainLayout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isDownload = pathname === '/download';
  const isLegal = pathname === '/privacy-policy' || pathname === '/terms';
  const isContact = pathname === '/contact';

  return (
    <div className="min-h-screen bg-[#F3F6F8] text-[#14213D]">
      <Header />
      <main
        className={`mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8${isHome ? ' site-main--home' : ''}${isDownload ? ' site-main--download' : ''}${isLegal ? ' site-main--legal' : ''}${isContact ? ' site-main--contact' : ''}`}
      >
        <Outlet />
      </main>
      <Footer className={isDownload ? 'site-footer--download' : undefined} />
    </div>
  );
};

export default MainLayout;
