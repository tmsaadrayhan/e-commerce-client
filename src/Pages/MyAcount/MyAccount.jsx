import React, { useState } from "react";
import MyOrder from "./MyOrder/MyOrder";
import Wishlist from "./Wishlist/Wishlist";
import MyInfo from "./MyInfo/MyInfo";

const MyAccount = () => {
  const [tab, setTab] = useState(1);
  const handleTab = (id) => {
    setTab(id);
  };
  const aside = [
    { id: 1, name: "My orders" },
    { id: 2, name: "Wishlist" },
    { id: 3, name: "My info" },
  ];
  return (
    <div className="flex max-w-[1200px] mx-auto">
      <div className="max-w-[300px] grow">
        <aside>
          {aside.map((aside) => (
            <div key={aside.id}>
              <button onClick={() => handleTab(aside.id)}>{aside.name}</button>
            </div>
          ))}
          <div>
            <button>Sign out</button>
          </div>
        </aside>
      </div>
      <div className="grow">
        <div className={`${tab === 1 ? "block" : "hidden"}`}>
          <MyOrder></MyOrder>
        </div>
        <div className={`${tab === 2 ? "block" : "hidden"}`}>
          <Wishlist></Wishlist>
        </div>
        <div className={`${tab === 3 ? "block" : "hidden"}`}>
          <MyInfo></MyInfo>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
