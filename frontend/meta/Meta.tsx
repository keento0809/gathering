import Head from "next/head";

type Props = {
  title?: string;
  keywords?: string;
  description?: string;
};

const Meta = ({
  title = "Gathering",
  keywords = "social event, meetup",
  description = "Meetup application",
}: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keyword" content={keywords} />
      <meta name="description" content={description} />
    </Head>
  );
};

export default Meta;
