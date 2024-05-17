import Product from "../../Product/Product";

const CartItems = () => {
  const product = "Men’s Short Sleeve  Open -Collar Polo Sweater.";
  const color = "Red";
  const size = "XL";
  const img = "https://i.ibb.co/mTrRCNP/a2680b31aaa3646a65b79715527cf6b9.jpg";
  const imgAlt = "Product image";
  const ship = true;
  const price = 423;
  const offerPrice = 323;

  return (
    <div
      style={{ border: "1px solid #000000" }}
      className="rounded-xl m-[1rem] p-[1rem]"
    >
      <div className="flex">
        <div>
          <img
            className="w-[10rem] me-[1rem] rounded-xl"
            src={img}
            alt={imgAlt}
          />
        </div>
        <div className="grow">
          <header>
            <h1>{product}</h1>
            <h1 className="text-[12px]">Color: {color}</h1>
            <h1 className="text-[12px]">Size{size}</h1>
            <h1 className="text-[12px]">{product}</h1>
          </header>
        </div>
        <div>
          <p>BDT {price}</p>
          <p>Sale BDT {offerPrice}</p>
          <p>Total BDT {offerPrice}</p>
        </div>
      </div>
      <p className="text-[12px]">
        In Stock: Usually ships within 2 business days.
      </p>
      <div className="flex items-center">
        <div
          style={{ border: "1px solid #000000" }}
          className="w-fit p-[2px] rounded-full me-[.5rem]"
        >
          <div className="w-[8px] h-[8px] rounded-full bg-black"></div>
        </div>
        <p>Ship</p>
      </div>
    </div>
  );
};

export default CartItems;
