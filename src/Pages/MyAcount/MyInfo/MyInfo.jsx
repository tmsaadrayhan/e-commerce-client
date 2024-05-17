import { Formik } from "formik";
import PhoneInput from "react-phone-number-input/input";
import "react-phone-number-input/style.css";

const MyInfo = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
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
          <form className="p-[1rem]" onSubmit={handleSubmit}>
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
            <div className="p-[1rem] ">
              <label>My info</label>
              <textarea
                className="bg-[#F6F6F6] w-full p-[1rem]"
                placeholder="Delivery Instruction"
                name="deliveryInstruction"
                value={values.deliveryInstruction}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="p-[1rem]">
              <button
                className="bg-[#262626] text-[#FFFFFF] font-bold p-[.4rem] px-[1rem] rounded-xl"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default MyInfo;
