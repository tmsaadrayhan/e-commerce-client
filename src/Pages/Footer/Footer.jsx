import { Formik } from "formik";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerInfos = [
    {
      _id: 1,
      footerHeading: "Need Help",
      content: [
        {
          title: "Contact Us",
          link: "https://reactrouter.com/en/main/start/tutorial",
        },
        {
          title: "Track Order",
          link: "https://reactrouter.com/en/main/start/tutorial",
        },
        {
          title: "Returns & Refunds",
          link: "https://reactrouter.com/en/main/start/tutorial",
        },
        {
          title: "FAQ's",
          link: "https://reactrouter.com/en/main/start/tutorial",
        },
      ],
    },
    {
      _id: 2,
      footerHeading: "Company",
      content: [
        {
          title: "About Us",
          link: "https://reactrouter.com/en/main/start/tutorial",
        },
        {
          title: "euphoria Blog",
          link: "https://reactrouter.com/en/main/start/tutorial",
        },
        {
          title: "euphoriastan",
          link: "https://reactrouter.com/en/main/start/tutorial",
        },
        {
          title: "Collaboration",
          link: "https://reactrouter.com/en/main/start/tutorial",
        },
      ],
    },
    {
      _id: 3,
      footerHeading: "More Info",
      content: [
        {
          title: "Term and Conditions",
          link: "https://reactrouter.com/en/main/start/tutorial",
        },
        {
          title: "Privacy Policy",
          link: "https://reactrouter.com/en/main/start/tutorial",
        },
        {
          title: "Shipping Policy",
          link: "https://reactrouter.com/en/main/start/tutorial",
        },
        {
          title: "Sitemap",
          link: "https://reactrouter.com/en/main/start/tutorial",
        },
      ],
    },
    {
      _id: 4,
      footerHeading: "Contact",
      content: [
        {
          title: "support@Fashion.com",
          link: "https://reactrouter.com/en/main/start/tutorial",
        },
        {
          title: "Address Details , Dhaka-1214, Bangladesh",
          link: "https://reactrouter.com/en/main/start/tutorial",
        },
      ],
    },
  ];
  return (
    <div className="bg-[#262626] text-[#FFFFFF]">
      <div className="max-w-[1200px] mx-auto pb-[3rem]">
        <div className={`flex `}>
          {footerInfos.map((footerInfo) => (
            <div className="grow m-[1rem]" key={footerInfo._id}>
              <article>
                <header>
                  <h1 className="text-xl font-bold my-[1rem]">
                    {footerInfo.footerHeading}
                  </h1>
                </header>

                {footerInfo.content.map((link) => (
                  <div key={footerInfo.content.indexOf(link)}>
                    <Link to={link.link}>{link.title}</Link>
                  </div>
                ))}
              </article>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-[1rem]">
          <div>
            <header className="font-bold">Subscribe to our newsletter</header>
            <Formik
              initialValues={{ email: "" }}
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
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <hr style={{ border: "0.1px solid #BEBCBD" }} />
      <div className="text-center py-[.5rem]">
        <article>
          <p>Copyright © 2024 MicroBuddy. All rights reserved.</p>
        </article>
      </div>
    </div>
  );
};

export default Footer;
