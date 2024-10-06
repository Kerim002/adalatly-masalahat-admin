import { BannerContent } from "../entities/banner";

const Banner = () => {
  return (
    <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-5">
      <BannerContent />
    </div>
  );
};

export default Banner;
