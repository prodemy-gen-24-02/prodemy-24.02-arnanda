import playStore from "/assets/images/play-store.png";
import appStore from "/assets/images/app-store.png";
import logoWhite from "/assets/images/logo-white.png";

const Footer = () => {
  return (
    <footer className="footer bg-black text-gray-400 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="footer-content md:mr-8">
          <h3 className="text-white mb-4">Download our App</h3>
          <p>Download App for Android and iOS mobile phone.</p>
          <div className="app-logo mt-4 flex">
            <img src={playStore} className="w-32 mr-2" alt="Play Store" />
            <img src={appStore} className="w-32" alt="App Store" />
          </div>
        </div>
        <div className="footer-content text-center md:text-left md:ml-8">
          <img
            src={logoWhite}
            className="w-40 mx-auto md:mx-0 mb-4"
            alt="Logo"
          />
          <p>
            Our Purpose Is To Sustainably Make the Pleasure <br />
            and Benefits of Sports Accessible to the Many.
          </p>
        </div>
        <div className="footer-content md:ml-8">
          <h3 className="text-white mb-4">Useful Links</h3>
          <ul>
            <li>Coupons</li>
            <li>Blog Post</li>
            <li>Return Policy</li>
            <li>Join Affiliate</li>
          </ul>
        </div>
        <div className="footer-content md:ml-8">
          <h3 className="text-white mb-4">Follow Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
      <hr className="my-6 border-gray-600" />
      <p className="text-center text-gray-500">Copyright 2024 - Redstore</p>
    </footer>
  );
};

export default Footer;
