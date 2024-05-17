import { Formik } from "formik";
import CartItems from "./CartItems/CartItems";
import { Link } from "react-router-dom";

const Cart = () => {
  const total = 513;
  return (
    <div className="flex max-w-[1200px] mx-auto">
      <div className="grow">
        <CartItems></CartItems>
        <CartItems></CartItems>
      </div>
      <div
        style={{ border: "1px solid #000000" }}
        className="max-w-[300px] grow m-[1rem] rounded-2xl divide-y divide-[#000000] h-fit"
      >
        <div className="p-[1rem] grow">
          <header>
            <h1 className="text-xl">Enter Promo Code</h1>
            <p>Limit 1 offer per order</p>
            <Formik
              initialValues={{ code: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.code) {
                  errors.code = "Required";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="flex">
                    <input
                      className="border"
                      type="text"
                      name="code"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.code}
                    />
                    <button className="" type="submit" disabled={isSubmitting}>
                      Submit
                    </button>
                  </div>

                  {errors.code && touched.code && errors.code}
                </form>
              )}
            </Formik>
          </header>
        </div>
        <div className="p-[1rem]">
          <article>
            <header>
              <h1>Your Best Offer</h1>
            </header>
            <p>
              Offer PROMO: 25% OFF select reg.- Price, Slae & Clearance clothing
              .... Show More
            </p>
            <div className="flex items-center">
              <p className="grow">Save BDT 323</p>
              <button className="bg-[#2E2E2E] text-[#FFFFFF] px-[1rem] py-[.3rem] rounded-xl">
                Apply
              </button>
            </div>
          </article>
        </div>
        <div>
          <div className="p-[1rem] divide-y">
            <div className="flex">
              <p className="grow">
                Subtotal <span>(3 items)</span>
              </p>
              <p>BDT {total}</p>
            </div>
            <div className="flex">
              <p className="grow">
                Subtotal <span>(3 items)</span>
              </p>
              <p>BDT {total}</p>
            </div>
            <div className="flex">
              <p className="grow">Taxes</p>
              <p>BDT {total}</p>
            </div>
            <div className="flex">
              <p className="grow">Shipping</p>
              <p>BDT {total}</p>
            </div>
            <div className="flex text-[#FF0055]">
              <p className="grow">Total</p>
              <p>BDT {total}</p>
            </div>
          </div>
          <div className="p-[1rem]">
            <button className="bg-[#262626] text-[#FFFFFF] font-bold w-full p-[.4rem] rounded-full">
              Proceed To Checkout
            </button>
            <Link
              className="flex justify-center underline text-[#0085FF] text-center"
              to="/"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
