import Categories from "./Categories/Categories";
import NewArrival from "./NewArrival/NewArrival";
import Offer from "./Offer/Offer";
import Policies from "./Policies/Policies";
import Recommended from "./Recommended/Recommended";

const Home = () => {
  const heroSection = {
    heading: "Get Ready",
    subHeader: "For the Fashion",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
    img: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg",
    imgAlt: "Hero Section Image",
    button1: {
      head: "AVAILABLE ON",
      title: "Google Play",
      img: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg",
      imgAlt: "Button 1 Image",
    },
    button2: {
      head: "AVAILABLE ON",
      title: "App Play",
      img: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg",
      imgAlt: "Button 2 Image",
    },
  };
  return (
    <div>
      {/* Hero section */}
      <section>
        <div className="flex items-center mx-auto w-fit ">
          <div className="lg: max-w-[35rem]">
            <article>
              <header>
                <h1>{heroSection.heading}</h1>
                <h1>{heroSection.subHeader}</h1>
              </header>
              <p>{heroSection.paragraph}</p>
            </article>
            <div className="flex flex-wrap">
              <button className="flex items-center bg-[#000000] text-[#FFFFFF] my-[1rem] rounded-xl p-[5px] me-[1rem]">
                <div className="w-[3rem]">
                  <img src={heroSection.button1.img} alt="" />
                </div>
                <div>
                  <header>
                    <h1>{heroSection.button1.head}</h1>
                  </header>
                  <p>{heroSection.button1.title}</p>
                </div>
              </button>
              <button className="flex items-center bg-[#000000] text-[rgb(255,255,255)] my-[1rem] rounded-xl p-[5px]">
                <div className="w-[3rem]">
                  <img src={heroSection.button1.img} alt="" />
                </div>
                <div>
                  <header>
                    <h1>{heroSection.button1.head}</h1>
                  </header>
                  <p>{heroSection.button1.title}</p>
                </div>
              </button>
            </div>
          </div>
          <div>
            <img src={heroSection.img} alt="" />
          </div>
        </div>
      </section>
      {/* Category section */}
      <Categories></Categories>
      {/* Policies section */}
      <Policies></Policies>
      {/* New Arrival section */}
      <NewArrival></NewArrival>
      {/* Recommended section */}
      <Recommended></Recommended>
      {/* Recommended section */}
      <Offer></Offer>
    </div>
  );
};

export default Home;
