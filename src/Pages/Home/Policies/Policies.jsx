const Policies = () => {
  const policies1 = {
    _id: 1,
    heading: "Free Shipping",
    paragraph: "Free Shipping National wwide.order above BDT 1000",
    img: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg",
  };
  const policies2 = {
    _id: 2,
    heading: "30 Days Return",
    paragraph: "Simple Return it within 30 Days for an Exchange ",
    img: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg",
  };
  const policies3 = {
    _id: 3,
    heading: "100% Payment Secure",
    paragraph: "Use Online Payment with SSL Commerz ",
    img: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg",
  };
  return (
    <div className="grid grid-cols-3 mx-auto w-[1200px] mt-[2rem]">
      <div className="flex items-center">
        <div className="w-[5rem]">
          <img src={policies1.img} alt="" />
        </div>
        <div className="px-[2rem]">
          <article>
            <header>
              <h1 className="font-bold">{policies1.heading}</h1>
            </header>
            <p className="text-sm">{policies1.paragraph}</p>
          </article>
        </div>
        <div
          className="me-[2rem]"
          style={{ borderLeft: "1px solid green", height: "100%" }}
        ></div>
      </div>

      <div className="flex items-center">
        <div className="w-[5rem]">
          <img src={policies2.img} alt="" />
        </div>
        <div className="px-[2rem] ">
          <article>
            <header>
              <h1 className="font-bold">{policies2.heading}</h1>
            </header>
            <p className="text-sm">{policies2.paragraph}</p>
          </article>
        </div>
        <div
          className="me-[2rem]"
          style={{ borderLeft: "1px solid green", height: "100%" }}
        ></div>
      </div>
      <div className="flex items-center">
        <div className="w-[5rem]">
          <img src={policies3.img} alt="" />
        </div>
        <div className="px-[2rem] ">
          <article>
            <header>
              <h1 className="font-bold">{policies3.heading}</h1>
            </header>
            <p className="text-sm">{policies3.paragraph}</p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Policies;
