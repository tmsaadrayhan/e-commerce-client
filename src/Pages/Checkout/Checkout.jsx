import { Formik } from "formik";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Checkout = () => {
  const total = 513;
  return (
    <div className="flex max-w-[1200px] mx-auto text-[#3C4242]">
      <div className="max-w-[900px] grow p-[1rem]">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            apt: "",
            streetAddress: "",
            company: "",
            country: "",
            city: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
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
              <div className="p-[1rem]">
                <header>
                  <h1 className="text-xl font-bold">| Check out</h1>
                  <h1 className="font-bold mt-[1rem]">Billing Details</h1>
                </header>
              </div>
              <div className="flex">
                <div className="p-[1rem] grow">
                  <label>First Name* </label>
                  <br />
                  <input
                    placeholder="First Name"
                    className="bg-[#F6F6F6] w-full"
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                  />
                </div>
                <div className="p-[1rem] grow">
                  <label>Last Name* </label>
                  <br />
                  <input
                    placeholder="Last Name"
                    className="bg-[#F6F6F6] w-full"
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                  />
                </div>
              </div>
              <div className="flex">
                <div className="p-[1rem] grow">
                  <label>Apt, suite, unit </label>
                  <br />
                  <input
                    placeholder="apartment, suite, unit, etc. (optional)"
                    className="bg-[#F6F6F6] w-full"
                    type="text"
                    name="apt"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.apt}
                  />
                </div>
                <div className="p-[1rem] grow">
                  <label>Street Address* </label>
                  <br />
                  <input
                    placeholder="House number and street name"
                    className="bg-[#F6F6F6] w-full"
                    type="text"
                    name="streetAddress"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.streetAddress}
                  />
                </div>
              </div>
              <div className="flex">
                <div className="p-[1rem] grow">
                  <label>Company Name</label>
                  <br />
                  <input
                    placeholder="Company (optional)"
                    className="bg-[#F6F6F6] w-full"
                    type="text"
                    name="company"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.company}
                  />
                </div>
                <div className="p-[1rem] grow">
                  <label>Country / Region* </label>
                  <br />
                  <input
                    placeholder="Country / Region"
                    className="bg-[#F6F6F6] w-full"
                    type="text"
                    name="country"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.country}
                  />
                </div>
              </div>
              <div className="flex">
                <div className="p-[1rem] grow">
                  <label>City*</label>
                  <br />
                  <input
                    placeholder="Town / City"
                    className="bg-[#F6F6F6] w-full"
                    type="text"
                    name="city"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
                  />
                </div>
                <div className="p-[1rem] grow">
                  <label>State*</label>
                  <br />
                  <input
                    placeholder="State"
                    className="bg-[#F6F6F6] w-full"
                    type="text"
                    name="state"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.state}
                  />
                </div>
                <div className="p-[1rem] grow">
                  <label>Postal Code*</label>
                  <br />
                  <input
                    placeholder="Postal Code"
                    className="bg-[#F6F6F6] w-full"
                    type="text"
                    name="postalCode"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.postalCode}
                  />
                </div>
              </div>
              <div className="w-1/2 p-[1rem] ">
                <PhoneInput
                  className="bg-[#F6F6F6] w-full"
                  placeholder="Enter phone number"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2 p-[1rem] ">
                <label>
                  <input type="checkbox" name="saveInfo" value={true} />
                  Save my information for a faster checkout
                </label>
              </div>
              <div className="p-[1rem]">
                <header>
                  <h1 className="text-xl font-bold">Shipping Address</h1>
                  <p>
                    Select the address that matches your card or payment method.
                  </p>
                </header>
              </div>
              <div className="p-[1rem]">
                <div className="p-[1rem] bg-[#F6F6F6] rounded-xl divide-y">
                  <div>
                    <label>
                      <div className="flex items-start">
                        <input
                          className="m-[.5rem]"
                          name="addAdress"
                          type="radio"
                        />
                        Same as Billing address
                      </div>
                    </label>
                  </div>
                  <div>
                    <label>
                      <div className="flex items-start">
                        <input
                          className="m-[.5rem]"
                          name="addAdress"
                          type="radio"
                        />
                        Same as Billing address
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="p-[1rem]">
                <header>
                  <h1 className="text-xl font-bold">Shipping Address</h1>
                  <p>
                    Select the address that matches your card or payment method.
                  </p>
                </header>
              </div>
              <div className="p-[1rem]">
                <div className="p-[1rem] bg-[#F6F6F6] rounded-xl divide-y">
                  <div className="py-[1rem]">
                    <p className="text-xl font-bold">
                      Arrives by Monday, June 7
                    </p>
                  </div>
                  <div className="flex items-start">
                    <input
                      className="m-[.5rem]"
                      name="addAdress"
                      type="radio"
                    />
                    <div className="w-[20%]">
                      <h1 className="font-bold">Express </h1>
                      <p>No Additional Import Change at Delivery</p>
                    </div>
                    <div className="grow text-center">
                      <p className="font-bold">7-12 Business Days</p>
                    </div>
                    <div>
                      <p className="font-bold">BDT 8,753</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <input
                      className="m-[.5rem]"
                      name="addAdress"
                      type="radio"
                    />
                    <div className="w-[20%]">
                      <h1 className="font-bold">Express </h1>
                      <p>No Additional Import Change at Delivery</p>
                    </div>
                    <div className="grow text-center">
                      <p className="font-bold">7-12 Business Days</p>
                    </div>
                    <div>
                      <p className="font-bold">BDT 8,753</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-[1rem]">
                <header>
                  <h1 className="text-xl font-bold">Payment Method</h1>
                  <p>All transactions are secure and encrypted.</p>
                </header>
              </div>
              <div className="p-[1rem]">
                <div className="p-[1rem] bg-[#F6F6F6] rounded-xl divide-y">
                  <div>
                    <label>
                      <div className="flex items-start">
                        <input
                          className="m-[.5rem]"
                          name="addAdress"
                          type="radio"
                        />
                        <div>
                          <h1 className="text-xl font-bold">Credit Card</h1>
                          <p>We accept all major credit cards.</p>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div>
                    <label>
                      <div className="flex items-start">
                        <input
                          className="m-[.5rem]"
                          name="addAdress"
                          type="radio"
                        />
                        <div>
                          <h1 className="text-xl font-bold">
                            Cash on delivery
                          </h1>
                          <p>Pay with cash upon delivery.</p>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div>
                    <label>
                      <div className="flex items-start">
                        <input
                          className="m-[.5rem]"
                          name="addAdress"
                          type="radio"
                        />
                        <div>
                          <h1 className="text-xl font-bold">Paypol</h1>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <button
                className="bg-[#262626] text-[#FFFFFF] font-bold p-[.4rem] px-[1rem] rounded-xl"
                type="submit"
                disabled={isSubmitting}
              >
                Pay Now
              </button>
            </form>
          )}
        </Formik>
      </div>
      <aside className="max-w-[400px] grow p-[1rem]">
        <div>
          <button className="bg-[#262626] text-[#FFFFFF] font-bold w-full p-[.4rem] rounded-xl">
            Place Order
          </button>
        </div>
        <div>
          <header>
            <h1 className="text-xl font-bold">Order Summary</h1>
          </header>
          <div>
            <div className="flex">
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
          </div>
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
        </div>
      </aside>
    </div>
  );
};

export default Checkout;
