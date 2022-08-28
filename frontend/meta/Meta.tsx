import React from "react";
import Head from "next/head";
import { MetaDefaultPropsType } from "../models/model";

const Meta = ({ title, keywords, description }: MetaDefaultPropsType) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keyword" content={keywords} />
      <meta name="description" content={description} />
      <link
        rel="stylesheet"
        href="https://unpkg.com/flowbite@1.5.1/dist/flowbite.min.css"
      />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Gathering",
  keywords: "social event, meetup",
  description: "Meetup application",
};

export default Meta;
