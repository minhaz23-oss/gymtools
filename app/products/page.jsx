import Image from "next/image";
import Link from "next/link";
const page = () => {
  const products = [
    { id: 1, name: "PU Dumbbells Pair 50kg", img:'product1.jpg',goto:'https://amzn.to/49wQ1ZM'  },
    { id: 2, name: "Grebest Heavy Duty Resistance ", img: 'product2.jpg',goto:'https://amzn.to/4aNW79n' },
    { id: 3, name: "Competition Kettlebell",  img: 'product3.jpg',goto:'https://amzn.to/3TMP0Ha'  },
    { id: 4, name: "Foam Roller", img: 'product4.jpg',goto:'https://amzn.to/3vPq3CT'  },
    { id: 5, name: "Jump Rope", img: 'product5.jpeg',goto:'https://amzn.to/3xrAvRC' },
    { id: 6, name: "Premium fitness yoga mat - 15mm", img: 'product6.jpg',goto:'https://amzn.to/49mcZmo' },
    { id: 7, name: "Hand grip strengthener counter", img: 'product7.jpg',goto:'https://amzn.to/4avrOoc' },
    { id: 8, name: "stability ball", img: 'product8.jpg',goto:'https://amzn.to/49HHPWV' },
  ]
  return (
    <main className=" w-full mt-10 flex flex-col flex-center pb-[100px]">
      <h1 className="gradient-text font-black text-[30px] md:text-[40px] text-center uppercase leading-none">Best gym  products that will suite you as a beginner and intermediate </h1>
      <p className=" text-center mt-3 w-[95%] md:w-[80%] text-[14px] md:text-[18px] text-silver font-semibold">"Welcome to our curated collection of top-notch fitness products designed to elevate your workout experience. From cutting-edge gym equipment to premium performance gear, each item in our selection has been carefully selected to help you reach your fitness goals with confidence and efficiency."</p>
      <div className=" w-full min-h-[500px] flex flex-center gap-[40px] flex-wrap mt-8">
      {products.map((val) => (
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
    </main>
  )
}

export default page
