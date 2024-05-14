import axios from "axios";
import { Field, Formik } from "formik";
import { useEffect, useState } from "react";
import { Form, Link } from "react-router-dom";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ecommerce-0mig.onrender.com/categories?search="
        );
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    // Cleanup function if needed
    return () => {
      // Cleanup code here
    };
  }, []); // Empty dependency array means this effect will only run once after the initial render

  const headerTopCaption = [
    { _id: 1, text: "Use code:", color: "#262626" },
    { _id: 2, text: "PROMO", color: "#FF0055" },
    { _id: 3, text: "and get", color: "#262626" },
    { _id: 4, text: "20%", color: "#FF0055" },
    {
      _id: 5,
      text: " off  *  For More Order Check our product list .",
      color: "#FF0055",
    },
  ];
  const headerTopLinks = [
    {
      _id: 1,
      img: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg",
      imgAlt: "Sale Image",
      text: "Sale",
      color: "#FF0055",
      link: "https://reactrouter.com/en/main/start/tutorial",
    },
    {
      _id: 2,
      img: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg",
      imgAlt: "Order Tracking Image",
      text: "Order Tracking",
      color: "#807D7E",
      link: "https://reactrouter.com/en/main/start/tutorial",
    },
  ];
  const headerImg = {
    _id: 1,
    img: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg",
    imgAlt: "Logo Image",
  };
  return (
    <div>
      <nav>
        {/* Top Header section */}
        <section>
          <div className="flex flex-wrap mx-auto max-w-[1200px] py-[.5rem]">
            <div>
              <p>
                {headerTopCaption.map((caption) => (
                  <span key={caption._id} style={{ color: `${caption.color}` }}>
                    {caption.text}{" "}
                  </span>
                ))}
              </p>
            </div>
            <div className="grow flex justify-end">
              <div className="flex flex-wrap">
                {headerTopLinks.map((link) => (
                  <Link key={link._id} to={`${link.link}`}>
                    <div className="flex">
                      <img
                        className="w-[1.5rem]"
                        src={link.img}
                        alt={link.imgAlt}
                      />
                      <p style={{ color: `${link.color}` }}>{link.text}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Main Header */}
        <section>
          <div className="shadow-[0_0px_30px_-15px_rgba(0,0,0,0.3)] py-[.7rem]">
            <div className="flex items-center max-w-[1200px] mx-auto">
              <img className="w-[4rem]" src={headerImg.img} alt="" />
              <div className="flex grow justify-center">
                {categories.map((category) => (
                  <p className="mx-[1rem]" key={category._id}>
                    {category.name}{" "}
                  </p>
                ))}
              </div>
              <div>
                <Formik
                  initialValues={{ search: "" }}
                  onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    setSubmitting(false);
                  }}
                >
                  {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="search"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.text}
                        className="bg-[#F6F6F6]"
                      />

                      <button type="submit" disabled={isSubmitting}>
                        Submit
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
              <div className="w-[2rem] m-[1rem]">
                <img
                  src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"
                  alt=""
                />
              </div>
              <div className="w-[2rem] m-[1rem]">
                <img
                  src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"
                  alt=""
                />
              </div>
              <div className="w-[2rem] m-[1rem]">
                <img
                  src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default Header;
