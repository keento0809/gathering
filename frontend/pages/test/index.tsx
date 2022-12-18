import Head from "next/head";
import React, { useState } from "react";
import Wrapper from "../../components/Wrapper/Wrapper";

const Test = () => {
  const [file, setFile] = useState<File>();
  const handleSetFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files![0]);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submitting!", file);
  };
  return (
    <>
      <Head>
        <title>Test</title>
      </Head>
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleSetFile} />
          <button type="submit" className="px-4 py-2 border border-red-400">
            Submit
          </button>
        </form>
      </Wrapper>
    </>
  );
};

export default Test;
