"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter()
  const closeMenu = ( ) => {
     setToggle(false)
  }
  const handleAbout = (e) => {
      if(router.pathName !== '/'){
        e.preventDefault();
        router.push('/#aboutus')
        closeMenu()
      }
  }
  return (
    <nav>
      <div className="w-full h-[50px] border border-silver rounded-md flex items-center justify-between px-[20px]">
        <Link href='/' className=" gradient-text font-black text-[20px] md:text-[25px]">GYMTOOLS.</Link>
        <ul className=" lg:gap-[50px] gap-[30px] md:flex hidden  ">
          <Link href="/" onClick={closeMenu} className="links">
            Home
          </Link>
          <Link href="/products" onClick={closeMenu} className="links">
            Products
          </Link>
          <Link href="/blogs" onClick={closeMenu} className="links">
            Blogs
          </Link>
          <Link href="#aboutus" onClick={handleAbout} className="links">
            About us
          </Link>
        </ul>
        <FaBars
          className=" text-silver text-[24px] md:hidden block cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      {toggle && (
        <div className="border border-silver rounded-md p-2 mt-2 ">
          <ul className=" flex flex-col gap-[10px]  ">
            <Link href="/" onClick={closeMenu} className="links">
              Home
            </Link>
            <Link href="/products" onClick={closeMenu} className="links">
              Products
            </Link>
            <Link href="/blogs" onClick={closeMenu} className="links">
              Blogs
            </Link>
            <Link href="#aboutus" onClick={closeMenu} className="links">
              About us
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
