import { useState } from "react";
import { ErrorMessage, Field, Formik } from "formik";
import Rating from "../Rating";
import ReactRating from "react-rating";
import { GoStar } from "react-icons/go";
import { IoIosStar } from "react-icons/io";

const UserComments = ({ rating }) => {
  const [writeReview, setWriteReview] = useState(false);
  const handleWeitReview = () => {
    setWriteReview(true);
  };
  const reviews = [
    {
      _id: 1,
      user: "Lauren H",
      review: "My son Loved his spiderman swimsuit.",
      date: "2012-04-23T18:25:43.511Z",
      rating: 3.5,
    },
    {
      _id: 2,
      user: "Lauren H",
      review: "My son Loved his spiderman swimsuit.",
      date: "2012-04-23T18:25:43.511Z",
      rating: 3.5,
    },
  ];
  return (
    <div>
      <div className="flex items-center py-[1rem]">
        <div className="flex">
          <Rating rating={rating.rating}></Rating>
          <p>
            {rating.rating} {"("}
            {rating.total}
            {")"}
          </p>
        </div>
        <div>
          <button
            onClick={handleWeitReview}
            className="bg-[#262626] text-[#FFFFFF] p-[.4rem] px-[1rem] rounded-md ms-[1rem]"
          >
            Write a Review
          </button>
        </div>
      </div>
      <div className={`${writeReview ? "block" : "hidden"}`}>
        <Formik
          initialValues={{ name: "", message: "", rating: 0 }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form className="max-w-[20rem]" onSubmit={handleSubmit}>
              <div>
                <input
                  className="border w-full p-[.5rem] ps-[1rem] rounded-lg mb-[1rem]"
                  placeholder="Name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>
              <div>
                <textarea
                  className="border w-full p-[.5rem] ps-[1rem] rounded-lg"
                  placeholder="Tell Us What you think."
                  type="text"
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </div>
              <div>
                <Field name="rating">
                  {({ field, form }) => (
                    <ReactRating
                      emptySymbol={<GoStar></GoStar>}
                      fullSymbol={<IoIosStar></IoIosStar>}
                      placeholderSymbol={<GoStar></GoStar>}
                      {...field}
                      initialRating={form.values.rating}
                      onChange={(value) =>
                        form.setFieldValue(field.name, value)
                      }
                    />
                  )}
                </Field>
                <ErrorMessage name="rating" component="div" />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
      {reviews.map((review) => (
        <div
          key={review._id}
          style={{
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: "1px 0px 0px 0px",
          }}
          className="py-[1rem] flex items-center"
        >
          <div
            style={{
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: "0px 1px 0px 0px",
            }}
            className="pe-[1rem]"
          >
            <header>
              <h1 className="text-xl font-bold">{review.user}</h1>
              <p>{review.date}</p>
              <div className="flex">
                <Rating rating={review.rating} />
                <p className="ms-[1rem]">{review.rating}</p>
              </div>
            </header>
          </div>
          <div className="ms-[1rem]">
            <p>{review.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserComments;
