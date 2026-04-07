// import { Link } from "react-router-dom"

// function Button({children, to, variant = "primary"}) {
//     const className = " inline-block p-3 bg-green-600 rounded-full font-semibold uppercase  tracking-wide   transition-colors duration-500 hover:bg-blue-300  sm:px-6 sm:py-4 "

//     if (to)
//         return (
//             <Link to={to} className={className}  >{children}</Link>
//         )

//     return (
//         <button className={className} >
//             {children}
//         </button>
//     )
// }

// export default Button

import { Link } from 'react-router-dom';

function Button({ children, to, variant = 'primary' }) {
  const base =
    ' inline-block   p-3 bg-green-600 rounded-full font-semibold uppercase  tracking-wide   transition-colors duration-500  sm:px-6 sm:py-4 ';

  const style = {
    primary: 'bg-green-600 text-white hover-bg-green-700',
    secondary: 'bg-stone-300 text-stone-800 hover:bg-stone-400',
    small: 'text-xs  sm:py-2  ',
  };
  const className = `${base}  ${style[variant]} `;

  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );

  return <button className={className}>{children}</button>;
}

export default Button;
