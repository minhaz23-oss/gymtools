import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" w-full h-[200px] mt-20 bg-cardcolor/[.12] rounded-t-[15px] flex flex-col flex-center px-3 ">
      <div className=" flex gap-5 w-[90%] flex-wrap flex-center">
        <Link className="links" href="/">
          Home
        </Link>
        <Link className="links" href="/products">
          Products
        </Link>
        <Link className="links" href="/blogs">
          Blog
        </Link>
        <Link className="links" href="#aboutus">
          About Us
        </Link>
      </div>
      <div className=" mt-3 text-center">
        <h1>Contact us: minhazfardin25@gmail.com</h1>
      </div>
      <div className=" mt-3">
        <FaInstagram className=" text-[25px]" />
      </div>
    </footer>
  );
};

export default Footer;
