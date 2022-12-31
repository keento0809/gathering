import axios from "axios";
import Head from "next/head";
import React, { useState } from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import { server } from "../../config";
import { useSession } from "next-auth/react";

const Test = () => {
  const [file, setFile] = useState<File | null>();
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const { data: session } = useSession();
  const handleSetFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files![0]);
    setFile(event.target.files![0]);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", file!);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    const result = await axios.post(`${server}/api/test`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(result);
    if (result) {
      console.log("Succeeded to upload image to S3 bucket");
      setFile(null);
      setIsLoading(false);
    } else {
      throw new Error("Failed to upload image to S3 bucket");
    }
  };
  return (
    <>
      <Head>
        <title>Admin Test</title>
      </Head>
      <Wrapper>
        {!session && <div>Not authorized.</div>}
        {session && (
          <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleSetFile} />
            <button type="submit" className="px-4 py-2 border border-red-400">
              Submit
            </button>
          </form>
        )}
        {isLoading && <p>Loading...</p>}
      </Wrapper>
    </>
  );
};

export default Test;
