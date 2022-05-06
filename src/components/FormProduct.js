import React from "react";

import { useDispatch } from "react-redux";
import { addProduct } from "../store/actions/products";
import { ErrorMessage, Field, Form, Formik } from "formik";
import formSchema from "./validation/formSchema";

export default function FormProduct() {
  const dispatch = useDispatch();

  const newTitleForm = {
    name: "",
    count: "",
    weight: "",
    size: "",
  };

  // function changeHandler(e) {
  //   setNewTitleForm({
  //     ...newTitleForm,
  //     [e.target.name]: e.target.value,
  //   });
  // }

  function onSubmitHandler(values) {
    console.log(values);
    dispatch(addProduct(values));
  }
  return (
    <>
      <Formik
        initialValues={newTitleForm}
        onSubmit={onSubmitHandler}
        validationSchema={formSchema}
      >
        <Form>
          <div>
            <label>
              Name <br />
              <Field name="name" />
              <ErrorMessage
                name="name"
                component="div"
                className="errorMessage"
              />
            </label>
          </div>
          <div>
            <label>
              count <br />
              <Field name="count" />
              <ErrorMessage
                name="count"
                component="div"
                className="errorMessage"
              />
            </label>
          </div>
          <div>
            <label>
              weight <br />
              <Field name="weight" />
              <ErrorMessage
                name="weight"
                component="div"
                className="errorMessage"
              />
            </label>
          </div>
          <div>
            <label>
              size <br />
              <Field name="size" />
              <ErrorMessage
                name="size"
                component="div"
                className="errorMessage"
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </Form>
      </Formik>
    </>
  );
}
