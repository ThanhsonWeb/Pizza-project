import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className=" my-10 text-center md:my-20 " >
      {/* 1rem =  16px */}
      <h1 className="text-xl  text-stone-700 font-semibold text-center">
        The best pizza. 
        <br />
       <span > Straight out of the oven, straight to you.</span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
