import {
    FaFacebookF,
    FaTelegramPlane,
    FaGithub,
    FaLinkedinIn,
  } from "react-icons/fa";
  
  const Footer = () => {
    return (
      <footer className="bg-[#1f2937] text-white py-6 min-h-[140px] text-center">
        <br />
        <br />
        <div className="flex justify-center gap-6 mb-4 text-gray-400 text-2xl">
          <a
            href='https://t.me/Le_Castro_32'
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 transform hover:scale-110 shadow-md hover:shadow-white/20 rounded-full p-2"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://www.facebook.com/khrwat.kh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 transform hover:scale-110 shadow-md hover:shadow-white/20 rounded-full p-2"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/abdullmalekl"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 transform hover:scale-110 shadow-md hover:shadow-white/20 rounded-full p-2"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/akhurwat/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 transform hover:scale-110 shadow-md hover:shadow-white/20 rounded-full p-2"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <br />
        <p id="endl" className="text-sm text-gray-300">
          © 2023 - 2024 Abdulmalik Khurwat. All rights reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;