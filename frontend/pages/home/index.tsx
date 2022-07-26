import React from "react";
import Layout from "../../components/Layout/Layout";
import SearchInput from "../../components/SearchInput/SearchInput";

const Home = () => {
  return (
    <Layout>
      <div className="fixed top-28 left-0 w-full px-5">
        <div className="home-title">
          <h3 className="text-xl text-red-500 font-bold">Welcome user!</h3>
        </div>
        <SearchInput />
      </div>
    </Layout>
  );
};

export default Home;
