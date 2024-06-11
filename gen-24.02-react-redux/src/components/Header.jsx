import image1 from "/assets/images/image1.png";

const Header = () => {
  return (
    <div className="header bg-gradient-to-r from-orange-300 to-red-300 p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="header-intro text-center md:text-left">
          <h1 className="text-5xl font-bold text-white">
            Give Your Workout <br />A New Style!
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Success isn&apos;t always about greatness. It&apos;s about
            consistency. Consistent hard work gains success. Greatness will
            come.
          </p>
          <a
            href="#"
            className="btn bg-red-500 text-white py-2 px-4 mt-4 inline-block hover:bg-blue-600 transition duration-300"
          >
            Explore Now →
          </a>
        </div>
        <div className="header-intro">
          <img src={image1} alt="Workout style" className="max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default Header;
