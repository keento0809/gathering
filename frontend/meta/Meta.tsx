import Head from "next/head";
import { MetaDefaultPropsType } from "../models/model";

const Meta = ({
  title = "Gathering",
  keywords = "social event, meetup",
  description = "Meetup application",
}: MetaDefaultPropsType) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keyword" content={keywords} />
      <meta name="description" content={description} />
    </Head>
  );
};

export default Meta;
