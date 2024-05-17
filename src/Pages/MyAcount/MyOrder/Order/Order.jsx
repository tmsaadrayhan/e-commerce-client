const Order = () => {
  return (
    <div className="w-full">
      <div className="flex bg-[#F6F6F6] p-[1rem] m-[1rem] rounded-xl">
        <div className="grow">
          <header>
            <h1 className="text-xl font-bold">Order no: #123456789</h1>
            <p>Order Date : 2 June 2023 2:40 PM </p>
            <p>Estimated Delivery Date : 8 June 2023 </p>
          </header>
        </div>
        <div>
          <p>Order Status : Inprogress </p>
          <p>Payment Method : Cash on delivery </p>
        </div>
      </div>
      <div className="flex">
        <div className="flex grow">
          <div>
            <img
              className="max-w-[4rem] p-[.5rem]"
              src="https://i.ibb.co/RN65cTw/a3ef58cb4595aebc1e03607770b2dbfc.jpg"
              alt=""
            />
          </div>
          <div>
            <p>Blue Flower Print Crop Top x 1</p>
            <p>Color : Yellow</p>
            <p>Size: Xl</p>
          </div>
          <div>
            <p>$29.00</p>
          </div>
        </div>
        <div>
          <button className="bg-[#262626] text-[#FFFFFF] font-bold p-[.4rem] px-[1rem] rounded-xl">
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
