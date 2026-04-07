import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  // function
  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search..."
        className="text-md w-28 rounded-full px-2 py-1 transition-all duration-300 placeholder:text-stone-500 sm:w-64"
      />
    </form>
  );
}

export default SearchOrder;
