import { Carousel } from "@material-tailwind/react";
import logo1 from "../components/assets/menager-2759284-14187834.jpg";
import logo2 from "../components/assets/pexels-kian-mousazadeh-1964605-19193225.jpg";
import logo3 from "../components/assets/pexels-shukur-17859840.jpg";
const Home = () => {
  const stats = [
    {
      data: "35K",
      title: "Customers",
    },
    {
      data: "10K+",
      title: "Downloads",
    },
    {
      data: "40+",
      title: "Countries",
    },
    {
      data: "30M+",
      title: "Total revenue",
    },
  ];

  return (
    <section className="py-14  border-black flex flex-col gap-5 items-center">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-center justify-between lg:flex md:px-8 ">
        <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
          <div className="max-w-2xl">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl ">
              We do our best to make customers always happy
            </h3>
            <p className="mt-3 max-w-xl">
              Our commitment to excellence drives us to constantly exceed
              customer expectations. With a focus on innovation and quality, we
              strive to deliver products and services that enhance the lives of
              our customers.
            </p>
          </div>
          <div className="flex items-center justify-center gap-5 mt-6 md:mt-0 lg:mt-6  text-center">
            <ul className="inline-grid gap-10 gap-x-14 grid-cols-2">
              {stats.map((item, idx) => (
                <li key={idx} className="">
                  <h4 className="text-4xl text-primary font-semibold">
                    {item.data}
                  </h4>
                  <p className="mt-3 font-medium">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <h1 className="text-2xl uppercase mt-8">Our Team </h1>
      <Carousel
        className="rounded-md h-80 w-80 ">
  <img src={logo1} alt="image 1" className="h-full w-full object-cover" />
        <img src={logo2} alt="image 2" className="h-full w-full object-cover" />
        <img src={logo3} alt="image 3" className="h-full w-full object-cover" />
      </Carousel>
    </section>
  );
};

export default Home;
