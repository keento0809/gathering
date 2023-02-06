import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import { server } from "../../config";
import { useSession } from "next-auth/react";

const Test = () => {
  const [file, setFile] = useState<File | null>();
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const { data: session } = useSession();
  const handleSetFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files![0]);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", file!);
    const result = await axios.post(`${server}/api/test`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (result) {
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
      <div>
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
      </div>
    </>
  );
};

export default Test;
