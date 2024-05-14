import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);

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
  console.log(categories);
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section>
      <div className="max-w-[1200px] mx-auto">
        <header>
          <h1 className="text-xl font-bold">| CATEGORIES</h1>
        </header>
        <div className="slider-container">
          <Slider {...settings}>
            {categories.map((category) => (
              <div key={category._id}>
                <div className="rounded-xl overflow-hidden m-[1rem]">
                  <img src={category.image} alt="" />
                </div>
                <h3 className="text-center">{category.name}</h3>
              </div>
            ))}
            {categories.map((category) => (
              <div key={category._id}>
                <div className="rounded-xl overflow-hidden m-[1rem]">
                  <img src={category.image} alt="" />
                </div>
                <h3 className="text-center">{category.name}</h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Categories;
