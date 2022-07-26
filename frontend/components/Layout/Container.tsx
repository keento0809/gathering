import React from "react";

const Container = () => {
  const url =
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
  return (
    <section className="hero-image w-full h-96 bg-[url('')] bg-cover bg-center flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <p className="mt-5 text-center text-lg text-white opacity-70">
          This webiste is about programming and things like that
        </p>
        <a
          className="mt-8 px-12 py-3 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full"
          href="#"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Container;
