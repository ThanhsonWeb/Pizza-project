import CreateUser from '../features/user/CreateUser';

function Home() {
  return (
    <div className="my-10 text-center sm:my-20">
      {/* 1rem =  16px */}
      <h1 className="text-ellipsis text-xl font-semibold text-stone-700 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-blue-600">
          {' '}
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
