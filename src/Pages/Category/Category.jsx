import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Home/Card/Card";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const Category = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState("");
  const [colors, setColors] = useState([]);
  const [selectedColors, setSelectedColors] = useState("");
  const [styles, setStyles] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState("");
  const [offers, setOffers] = useState([]);
  const [selectedOffers, setSelectedOffers] = useState("");
  const [value, setValue] = useState([20, 37]);
  const valuetext = (value) => {
    return `Price: ${value}`;
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/products?search=${search}&categoryId=${id}&subCategoryId=${selectedSubCategories}&colorId=${selectedColors}&offerId=${selectedOffers}&styleId=${selectedStyles}&minPrice=${value[0]}&maxPrice=${value[1]}&`
        );
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [
    id,
    selectedSubCategories,
    selectedColors,
    selectedOffers,
    selectedStyles,
    search,
    value[0],
    value[1],
  ]);
  const handleSubCategories = (_id) => {
    setSelectedSubCategories(`${_id}`);
  };
  const handleColor = (_id) => {
    setSelectedColors(`${_id}`);
  };
  const handleStyle = (_id) => {
    setSelectedStyles(`${_id}`);
  };
  const handleOffer = (_id) => {
    setSelectedOffers(`${_id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/categories?search=`
        );
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/sub-category/categoryId/${id}`
        );
        setSubCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/color`);
        setColors(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/style`);
        setStyles(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/offer`);
        setOffers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);
  return (
    <div>
      <div className="text-center"> subCategory: {selectedOffers}</div>
      <div className="flex mx-auto w-fit">
        <div>
          <aside>
            <div>
              <header>
                <h1 className="text-xl font-bold"> Sub-category:</h1>
              </header>
              <p onClick={() => handleSubCategories("")}>All</p>
              {subCategories.map((subCategory) => (
                <p
                  onClick={() => handleSubCategories(subCategory._id)}
                  key={subCategory._id}
                >
                  {subCategory.name}
                </p>
              ))}
              <div>
                <Typography id="range-slider" gutterBottom>
                  <h1>Price:</h1>
                </Typography>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  min={0}
                  max={1000}
                />
              </div>
              <header>
                <h1 className="text-xl font-bold">color:</h1>
              </header>
              <p onClick={() => handleColor("")}>All</p>
              {colors.map((color) => (
                <p onClick={() => handleColor(color._id)} key={color._id}>
                  {color.name}
                </p>
              ))}
              <header>
                <h1 className="text-xl font-bold">style:</h1>
              </header>
              <p onClick={() => handleStyle("")}>All</p>
              {styles.map((style) => (
                <p onClick={() => handleStyle(style._id)} key={style._id}>
                  {style.name}
                </p>
              ))}
              <header>
                <h1 className="text-xl font-bold">offer:</h1>
              </header>
              <p onClick={() => handleOffer("")}>All</p>
              {offers.map((offer) => (
                <p onClick={() => handleOffer(offer._id)} key={offer._id}>
                  {offer.name}
                </p>
              ))}
            </div>
          </aside>
        </div>
        <div className="grid lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product._id} productId={product._id}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
