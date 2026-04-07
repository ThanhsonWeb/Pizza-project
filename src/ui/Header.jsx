import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';
function Header() {
  return (
    <header className="flex justify-between border-b-4 border-stone-600 bg-green-600 p-4 text-center text-2xl uppercase sm:py-9">
      <Link to="/" className="tracking-wide shadow-lg">
        {' '}
        Fast React Pizza Co.{' '}
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
