import { useSelector } from 'react-redux';

function UserName() {
  const userName = useSelector((store) => store.user.username);

  if (!userName) return null;

  return (
    <h1 className="flex hidden p-2 text-base font-semibold md:block">
      {userName}
    </h1>
  );
}

export default UserName;
