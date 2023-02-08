interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <h2 className="text-2xl pl-0.5 font-bold tracking-tighter text-left lg:text-center text-primary dark:text-red-400">
      {title}
    </h2>
  );
};

export default Title;
