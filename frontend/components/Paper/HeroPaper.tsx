import ImgPath from "../../public/static/hero_1.jpg";

const HeroPaper = () => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 opacity-40">
      <img
        src={ImgPath.src}
        className="w-full h-2/3 lg:h-4/5 bg-center bg-cover"
      />
    </div>
  );
};

export default HeroPaper;
