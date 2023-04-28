interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <h2 className="text-2xl pl-0.5 font-bold tracking-tighter text-left lg:text-center text-primary dark:text-red-400 [text-shadow:_0_2px_2px_rgb(255_255_255_/_70%)]">
      {title}
    </h2>
  );
};

export default Title;
