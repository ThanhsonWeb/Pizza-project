
import { Link } from 'react-router-dom';

function Button({ children, to, type = 'primary', onClick }) {
  const base =
    ' inline-block text-white  p-3 bg-blue-600 rounded-full font-semibold uppercase  tracking-wide   transition-colors duration-500   ';

  const style = {
    primary: ' px-4 py-3 md:px-6 md:py-4',
    secondary: 'bg-stone-300 text-stone- hover:bg-stone-400 sm:px-6 sm:py-4',
    small: 'text-xs  sm:py-2  sm:px-6 sm:py-4 ',
    round: ' px-3 py-[5px] ',
  };
  const className = `${base}  ${style[type]} `;

  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>

    );

  
    return (
      <button onClick={onClick} className={className}>
        {children}
      </button>
    );
}

export default Button;
