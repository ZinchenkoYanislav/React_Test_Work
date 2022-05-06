import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Name is a required")
    .min(2)
    .matches(/^[A-Z|А-Я]/g, "First leter should be big"),
  count: yup.string().required("Count is a required"),
  weight: yup.string().required("Weight is a required"),
  size: yup.string().required("Size is a required"),
});
