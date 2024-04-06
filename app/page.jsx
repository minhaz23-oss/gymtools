import Header from "@/components/Header";
import { Nothing_You_Could_Do } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const customFont = Nothing_You_Could_Do({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Home() {
  const cards = [
    { id: 1, name: "PU Dumbbells Pair 50kg",img:'product1.jpg',goto:'https://a.co/d/65BuMKQ' },
    { id: 2, name: "Grebest Heavy Duty Resistance",img:'product2.jpg',goto:'https://a.co/d/fcgQPhE'},
    { id: 3, name: "Competition Kettlebell ",img:'product3.jpg',goto:'https://a.co/d/a8FYChT' },
    { id: 4, name: "Foam Roller",img:'product4.jpg',goto:'https://a.co/d/eQfdDD6' },
  ];
  return (
    <main className=" w-full min-h-[300px] mb-10 ">
      <Header
        mainText="Build your Dream Home Gym"
        paragraph="Here you can find essential gym products that will help you in your journey"
        btnText="See products"
        goto="/products"
      />
      <section className=" flex flex-center w-full h-[150px] mt-5 bg-white/5 border border-silver rounded-[20px] p-3">
        <h1
          className={`${customFont.className} md:text-[30px] text-[24px] text-center`}
        >
          The journey of a thousand miles begins with a single step.
        </h1>
      </section>
      {/* Products Section */}
      <section className=" w-full   mt-10 flex flex-col flex-center">
        <h1 className=" text-orange text-[35px] font-bold text-center">
          Products
        </h1>
        <div className=" w-full min-h-[400px] mt-3 flex flex-center gap-[40px] flex-wrap">
          {cards.map((val) => (
            <div
              key={val.index}
              className=" w-[250px] h-[350px] border border-orange rounded-md bg-cardcolor/[.12] flex flex-col   p-4"
            >
              <Image
                src={`/${val.img}`}
                height={220}
                width={220}
                alt={`product${val.id}`}
                className=" rounded-md"
              />
              <p className=" mt-3 text-left line-clamp-1">{val.name}</p>
              <Link href={`${val.goto}`} className="btn-primary mt-7 flex flex-center">Buy it from amazon</Link>
            </div>
          ))}
        </div>
        <Link
          href="/products"
          className=" btn-primary mt-5 flex flex-center gap-[4px]"
        >
          See More Products
          <FaArrowRight />
        </Link>
      </section>
      {/* guide Section */}
      <section className="mt-12">
        <Header
          mainText="Are you a beginner or never done workout before?"
          btnText="Get the beginners guide"
          goto="/guide"
        />
      </section>
      {/* Blog Section */}
      <section className=" flex flex-col flex-center">
        <section className=" w-full min-h-10 mt-10 ">
          <h1 className=" text-orange text-[35px] font-bold text-center">
            Blog Posts
          </h1>
          <div className=" mt-3 w-full min-h-[350px] bg-cardcolor/[.12] border border-orange rounded-[15px] flex flex-col md:flex-row  flex-center gap-10 text-center md:text-left p-5">
            <div>
              <Image
                src="/product1.jpg"
                width={300}
                height={300}
                className=" rounded-[8px] w-32 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
                alt="product1"
              />
            </div>
            <div className="w-full md:w-[50%] flex flex-col justify-center items-center md:items-start">
              <h1 className=" font-semibold text-lg sm:text-xl md:text-2xl underline underline-offset-8 decoration-wavy decoration-orange">
                why you should use Dumbbells ?
              </h1>
              <p className=" font-normal text-[14px] sm:text-[16px] md:text-[18px] mt-3 ">
                Dumbbells are a powerful tool for beginners. With their
                versatility and effectiveness, they can help you achieve your
                fitness goals in a convenient and efficient way. Now go grab a
                pair and get moving!
              </p>
              <div className=" flex gap-4 ">
                <Link
                  href="/products"
                  className=" btn-primary mt-5 flex flex-center gap-[4px]"
                >
                  More Products
                  <FaArrowRight />
                </Link>
                <Link
                  href="https://a.co/d/65BuMKQ"
                  className=" btn-secondary mt-5 flex flex-center gap-[4px]"
                >
                  Buy it with Amazon
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className=" w-full min-h-10 mt-10 ">
          <div className=" mt-3 w-full min-h-[350px] bg-cardcolor/[.12] border border-orange rounded-[15px] flex flex-col  md:flex-row  flex-center gap-10 text-center md:text-left p-5">
            <div>
              <Image
                src="/product3.jpg"
                width={300}
                height={300}
                className=" rounded-[8px] w-32 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
                alt="product1"
              />
            </div>
            <div className="w-full md:w-[50%] flex flex-col justify-center items-center md:items-start  ">
              <h1 className=" font-semibold text-lg sm:text-xl md:text-2xl underline underline-offset-8 decoration-wavy decoration-orange">
                why you should use Competition kettlebells ?
              </h1>
              <p className=" font-normal text-[14px] sm:text-[16px] md:text-[18px] mt-3 ">
                Competition kettlebells pack a punch! They sculpt your entire
                body with each exercise, boosting strength, coordination, and
                calorie burn. Plus, the dynamic movements get your heart pumping
                for improved cardio health. Not only that, they build a strong
                grip for better everyday performance. It's a full-body workout
                powerhouse!
              </p>
              <div className=" flex gap-4 ">
                <Link
                  href="/products"
                  className=" btn-primary mt-5 flex flex-center gap-[4px]"
                >
                  More Products
                  <FaArrowRight />
                </Link>
                <Link
                  href="https://a.co/d/a8FYChT"
                  className=" btn-secondary mt-5 flex flex-center gap-[4px]"
                >
                  Buy it with Amazon
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Link href='/blogs' className=" btn-primary mt-4 flex flex-center gap-2">
          More BlogPosts
          <FaArrowRight />
        </Link>
      </section>
      {/* About Us Section */}
      <section id="aboutus" className=" w-full mt-10">
        <h1 className=" text-orange text-[35px] font-bold text-center">
          About Us
        </h1>
        <div className=" flex flex-center p-4 w-full min-h-[220px] bg-cardcolor/[.12] border border-orange rounded-[15px] mt-3">
            <p className=" text-center text-[16px] md:text-[18px] w-full md:w-[60%]">"Welcome to <span className="gradient-text font-black uppercase">gymtools.</span> , We're passionate about making fitness accessible. We offer expert reviews and guides to help you create your perfect home gym, one step (or dumbbell curl) at a time. We believe in smart fitness solutions. Our website equips you with the knowledge and tools to build a personalized home gym and achieve lasting results, efficiently and effectively.</p>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
