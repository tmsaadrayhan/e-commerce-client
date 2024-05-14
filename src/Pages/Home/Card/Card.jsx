import axios from "axios";
import { useEffect, useState } from "react";

const Card = ({ productId }) => {
  const [product, setProduct] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ecommerce-0mig.onrender.com/products/${productId}`
        );
        setProduct(response.data);
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
  console.log(product);
  return (
    <div>
      <div className="rounded-xl overflow-hidden m-[.5rem]">
        <img src={product.image} alt="" />
      </div>
      <div className="m-[.5rem]">
        <article>
          <header>
            <h1 className="text-sm">{product.title}</h1>
          </header>
          <p>
            {product.shortDescription && product.shortDescription.length > 40
              ? product.shortDescription.slice(0, 40) + "..."
              : product.shortDescription}
          </p>
        </article>
      </div>
    </div>
  );
};

export default Card;
