import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'Page Not Found — Billvault';
  }, []);

  return (
    <main className="mx-auto max-w-2xl rounded-xl border border-[#D5DCE5] bg-white p-8 text-center shadow-sm">
      <h1 className="text-3xl font-bold text-[#14213D]">Page Not Found</h1>
      <p className="mt-4 text-base text-[#4B5870]">The page you are looking for does not exist.</p>
      <div className="mt-6">
        <Link to="/">
          <Button type="button">Back to Home</Button>
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
