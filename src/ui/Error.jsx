import { useNavigate, useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';
function Error() {
  const navigate = useNavigate();
  // useRouteError() is a built in hook allow to check the current error
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1"></LinkButton>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
