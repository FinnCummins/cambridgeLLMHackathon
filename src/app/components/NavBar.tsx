import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <div className="w-full bg-blue-600 p-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">
        Legal Contract Analysis
      </div>
      <div>
        <Link href="/">
          <p className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-gray-200">
            Home
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;