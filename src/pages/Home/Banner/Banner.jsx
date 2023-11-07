import banner from '../../../assets/banner.jpg';

const Banner = () => {
  return (
    <div className=" max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-5 justify-between items-center mt-12 lg:mt-24 p-5 md:p-4 lg:p-2">
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold uppercase">
          We are Sharing Food
        </h2>
        <p className="mt-5 text-justify">
          {" "}
          In our community, we believe in the power of food to foster
          connections and create a sense of belonging. Through this program, we
          share not just nourishment but also the joy of coming together,
          breaking bread, and building relationships. It's a testament to the
          belief that sharing food is more than sustenance; it's an expression
          of care, unity, and the simple pleasures of life. Join us in this
          delightful journey of culinary camaraderie.
        </p>
        <button className="btn bg-[#D70F64] text-white hover:border-2 hover:border-[#D70F64] hover:bg-transparent hover:text-[#D70F64] mt-4 px-8">
          Join Us
        </button>
      </div>
      <div className="flex-1">
        <img
          src={banner}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
