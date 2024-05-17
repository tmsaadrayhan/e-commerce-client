import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "../Card/Card";

const NewArrival = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ecommerce-0mig.onrender.com/products/new-arrival"
        );
        setProducts(response.data);
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
  console.log(products);
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: products.length > 4 ? 4 : products.length,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
      <div className="mx-auto max-w-[1200px] mt-[2rem]">
        <header>
          <h1 className="text-xl font-bold text-end">NEW ARRIVAL |</h1>
        </header>
        <div>
          <Slider {...settings}>
            {products.map((product) => (
              <Card key={product._id} productId={product._id}></Card>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
