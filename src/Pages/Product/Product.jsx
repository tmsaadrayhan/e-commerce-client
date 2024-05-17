import { useState } from "react";
import Rating from "./Rating";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import UserComments from "./UserComments/UserComments";

const Product = () => {
  const tabs = [
    { _id: 1, name: "Description" },
    { _id: 2, name: "User comments" },
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0]._id);
  const handleTab = (_id) => {
    setCurrentTab(_id);
  };
  const rating = { _id: 1, rating: 3.5, total: 3 };
  const product = {
    _id: 1,
    title: "Raven Hoodie With Black colored Design",
    size: [
      { _id: 1, name: "XS" },
      { _id: 2, name: "S" },
      { _id: 3, name: "M" },
      { _id: 4, name: "L" },
      { _id: 5, name: "XL" },
    ],
    color: [
      { _id: 1, name: "Red", code: "FF0000" },
      { _id: 2, name: "Green", code: "00FF00" },
      { _id: 3, name: "Blue", code: "0000FF" },
    ],
    offer: true,
    company: "CLUB ROOM",
    price: 1000,
    sellPrice: 900,
    OfferPrice: 800,
    image: "https://i.ibb.co/mTrRCNP/a2680b31aaa3646a65b79715527cf6b9.jpg",
    imageAlt: "Product Image",
    imageGallery: [
      {
        url: "https://i.ibb.co/mTrRCNP/a2680b31aaa3646a65b79715527cf6b9.jpg",
        alt: "Image",
      },
      {
        url: "https://i.ibb.co/RN65cTw/a3ef58cb4595aebc1e03607770b2dbfc.jpg",
        alt: "Image",
      },
      {
        url: "https://i.ibb.co/RN65cTw/a3ef58cb4595aebc1e03607770b2dbfc.jpg",
        alt: "Image",
      },
      {
        url: "https://i.ibb.co/RN65cTw/a3ef58cb4595aebc1e03607770b2dbfc.jpg",
        alt: "Image",
      },
      {
        url: "https://i.ibb.co/RN65cTw/a3ef58cb4595aebc1e03607770b2dbfc.jpg",
        alt: "Image",
      },
      {
        url: "https://i.ibb.co/RN65cTw/a3ef58cb4595aebc1e03607770b2dbfc.jpg",
        alt: "Image",
      },
      {
        url: "https://i.ibb.co/RN65cTw/a3ef58cb4595aebc1e03607770b2dbfc.jpg",
        alt: "Image",
      },
      {
        url: "https://i.ibb.co/RN65cTw/a3ef58cb4595aebc1e03607770b2dbfc.jpg",
        alt: "Image",
      },
      {
        url: "https://i.ibb.co/RN65cTw/a3ef58cb4595aebc1e03607770b2dbfc.jpg",
        alt: "Image",
      },
    ],
    info: [
      {
        _id: 1,
        field: "Fabric",
        type: "Bio-washed Cotton",
      },
      {
        _id: 2,
        field: "Pattern",
        type: "Printed",
      },
      {
        _id: 3,
        field: "Fit",
        type: "Regular-fit",
      },
      {
        _id: 4,
        field: "Neck",
        type: "Round Neck",
      },
      {
        _id: 5,
        field: "Sleeve",
        type: "Half-sleeves",
      },
      {
        _id: 6,
        field: "Style",
        type: "Casual Wear",
      },
    ],
    longDescription:
      "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
  };
  const [img, setimg] = useState(product.image);
  const handleImage = (url) => {
    setimg(url);
  };
  return (
    <div>
      <div className="flex w-fit mx-auto">
        <div className="flex items-end bg-[#F6F6F6] max-w-[600px]">
          <div className="w-[100px] overflow-auto max-h-[40rem]">
            {product.imageGallery.map((image) => (
              <div
                className="w-full py-[1rem] pe-[1rem]"
                key={product.imageGallery.indexOf(image)}
              >
                <img
                  onClick={() => handleImage(image.url)}
                  className="rounded-xl"
                  src={image.url}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
          <img
            className="max-w-[500px] grow"
            src={img}
            alt={product.imageAlt}
          />
        </div>
        <div className="max-w-[600px] p-[1rem]">
          <header>
            <h1 className="text-xl">{product.company}</h1>
            <div className="max-w-[20rem]">
              <h1 className="text-3xl font-bold">{product.title}</h1>
            </div>
            <div className="flex">
              <Rating rating={rating.rating} size={2} />{" "}
              <p className="mx-[.5rem]"> {rating.rating}</p>
              <p>{`(${rating.total})`}</p>
            </div>
            <div className="flex items-center">
              <p className="font-bold">Select Size</p>
              <p className="ms-[1rem] me-[.5rem]">Size Guide</p>
              <IoIosArrowRoundForward className="text-2xl" />
            </div>
            <div className="flex">
              {product.size.map((item) => (
                <div
                  style={{ border: "1px solid #000000" }}
                  className="w-[1.5rem] h-[1.5rem] text-center m-[.5rem] rounded-lg"
                  key={item._id}
                >
                  <p className="text-sm">{item.name}</p>
                </div>
              ))}
            </div>
            <h1>Colours Available</h1>
            <div className="flex">
              {" "}
              {product.color.map((item) => (
                <div
                  key={item._id}
                  style={{ background: `#${item.code}` }}
                  className="w-[1rem] h-[1rem] m-[.5rem] rounded-full"
                ></div>
              ))}
            </div>
            <div>
              <p>BDT {product.price}</p>
              <p>Sale BDT {product.sellPrice}</p>
              <p>Extra 10% off use : PROMO</p>
              <p>With offer BDT {product.OfferPrice}</p>
            </div>
            <hr style={{ border: "1px solid #BEBCBD", margin: ".5rem 0rem" }} />
            <button className="flex justify-center items-center bg-[#262626] text-[#FFFFFF] w-full p-[.4rem] rounded-md">
              <LuShoppingCart />
              Add to cart
            </button>
            <div className="overflow-hidden mt-[1rem]">
              <div className="grid grid-cols-3 m-[-1px] bg-[#F6F6F6]">
                {product.info.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      borderStyle: "solid",
                      borderColor: "#BEBCBD",
                      borderWidth: "1px 1px 1px 1px",
                    }}
                    className="p-[1rem]"
                  >
                    <h1>{item.field}</h1>
                    <p>{item.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </header>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-[2rem]">
        <header>
          <h1 className="text-2xl font-bold">| Product Description</h1>
          <div className="mt-[1rem] flex">
            {tabs.map((tab) => (
              <h1
                onClick={() => handleTab(tab._id)}
                style={{
                  cursor: "pointer",
                  borderStyle: "solid",
                  borderColor: "#000000",
                  borderWidth: `${
                    tab._id === currentTab ? "0px 0px 1px 0px" : "0px"
                  }`,
                }}
                className={`me-[1rem] my-[1rem] pb-[1rem] ${
                  tab._id === currentTab
                    ? "text-[#3C4242] font-[600]"
                    : "text-[#807D7E]"
                }`}
                key={tab._id}
              >
                {tab.name}
              </h1>
            ))}
          </div>
          <div className={`${currentTab === 1 ? "block" : "hidden"}`}>
            <p>{product.longDescription}</p>
          </div>
          <div className={`${currentTab === 2 ? "block" : "hidden"}`}>
            <UserComments rating={rating}></UserComments>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Product;
