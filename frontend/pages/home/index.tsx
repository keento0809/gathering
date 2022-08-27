import React from "react";
import MyGathering from "../../components/Gathering/MyGathering";
import UpcomingGathering from "../../components/Gathering/UpcomingGathering";
import SearchInput from "../../components/SearchInput/SearchInput";

const Home = () => {
  const handleLogout = () => {
    console.log("logging out");
  };
  return (
    <>
      <div className="fixed top-28 left-0 w-full px-5">
        <div className="home-title">
          <h3 className="text-xl text-red-500 font-bold">Welcome user!</h3>
        </div>
        <SearchInput />
        <MyGathering />
        <UpcomingGathering />
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default Home;
