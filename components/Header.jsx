import Link from "next/link";

const Header = ({ mainText, paragraph, btnText,goto }) => {
  return (
    <section className=" flex flex-col flex-center w-[full] h-[320px] bg-white/5 border border-silver rounded-[20px] mt-7 sm:mt-10 relative p-4">
      <h1 className="gradient-text head-text">{mainText}</h1>
      <p className="body-text">{paragraph}</p>
      <Link href={goto} className="btn-primary mt-4">{btnText}</Link>
      <div className="blurry-div1"/><div className="blurry-div2"/>
    </section>
  );
};

export default Header;
