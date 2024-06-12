import playStore from "/assets/images/play-store.png";
import appStore from "/assets/images/app-store.png";
import logoWhite from "/assets/images/logo-white.png";

const Footer = () => {
  return (
    <div className="bg-black text-gray-300 py-14 px-0 font-sans text-base">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="mb-5 md:w-[45%] lg:w-[30%] md:flex md:flex-col md:justify-center lg:flex lg:justify-center">
            <h3 className="text-white text-lg font-bold mb-5 text-center md:text-center">
              Download our App
            </h3>
            <p className="text-center md:text-left">
              Download App for Android and iOS mobile phone.
            </p>
            <div className="flex md:flex-row lg:flex-row justify-center mt-5 space-x-2 md:space-x-0 md:justify-start">
              <img src={playStore} alt="Play Store" className="w-[140px]" />
              <img src={appStore} alt="App Store" className="w-[140px]" />
            </div>
          </div>

          <div className="mb-5 flex flex-col items-center md:w-[45%] lg:w-[30%]">
            <img
              src={logoWhite}
              alt="RedStore White Logo"
              className="mb-5 w-[180px]"
            />
            <p className="text-center">
              Our Purpose Is To Sustainably Make the Pleasure and Benefits of
              Sports Accessible to the Many.
            </p>
          </div>

          <div className="mb-5 text-center md:w-[45%] lg:w-[12%]">
            <h3 className="text-white text-lg font-bold mb-5">Useful Links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Affiliate</li>
            </ul>
          </div>

          <div className="mb-5 text-center md:w-[45%] lg:w-[12%]">
            <h3 className="text-white text-lg font-bold mb-5">Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-400 my-5" />
        <p className="text-center text-gray-300">Copyright © 2024 - Redstore</p>
      </div>
    </div>
  );
};

export default Footer;
