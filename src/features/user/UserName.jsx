import { useSelector } from 'react-redux';

function UserName() {
  const username = useSelector((store) => store.user.username);

  if (!username) return null;

  return (
    <h1 className="flex hidden p-2 text-base font-semibold md:block">
      {username}
    </h1>
  );
}

export default UserName;
