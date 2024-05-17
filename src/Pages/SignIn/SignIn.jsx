import { Formik } from "formik";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex justify-center p-[1rem]">
      <div className="max-w-[400px] grow">
        <header>
          <h1 className="text-center text-2xl font-bold my-[1rem]">
            Sign In Page
          </h1>
        </header>
        <div>
          <button
            className="flex justify-center items-center w-full my-[1rem] py-[.7rem] rounded-lg"
            style={{ border: "1px solid #000000" }}
          >
            <img
              className="me-[.5rem]"
              src="https://i.ibb.co/BTbq9K3/Google.png"
              alt=""
            />
            Continue With Google
          </button>
          <button
            className="flex justify-center items-center w-full py-[.7rem] rounded-lg"
            style={{ border: "1px solid #000000" }}
          >
            <img
              className="me-[.5rem]"
              src="https://i.ibb.co/7nSRKgS/twitter.png"
              alt=""
            />
            Continue With Twitter
          </button>
        </div>
        <div className="flex items-center my-[1rem]">
          <hr className="grow" /> <p className="px-[1rem]">or</p>{" "}
          <hr className="grow" />
        </div>
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
            <form onSubmit={handleSubmit}>
              <div>
                <label>User name or email address</label>
                <input
                  className="border w-full rounded-lg"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>
              <div>{errors.email && touched.email && errors.email}</div>
              <div>
                <div className="flex">
                  <label className="grow">Password</label> <button>Show</button>
                </div>
                <input
                  className="border w-full rounded-lg"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </div>
              <div>
                {errors.password && touched.password && errors.password}
              </div>
              <div className="flex justify-end">
                <Link className="underline">Forget your password</Link>
              </div>
              <div className="flex">
                <div className="w-full ">
                  <div className="flex justify-center">
                    <button
                      className="bg-[#262626] text-[#FFFFFF] font-bold p-[.4rem] px-[1rem] rounded-xl"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <p>Don’t have an account?</p>{" "}
                    <Link className="underline" to="/sign-up">
                      Sign up
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignIn;
