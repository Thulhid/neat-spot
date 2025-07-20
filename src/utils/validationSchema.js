import * as yup from "yup";

export const loginSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const bookingUpdateSchema = yup.object({
  service_id: yup.string().required("Please select a service"),
  address: yup.string().required("Address is required"),
  date_time: yup
    .string()
    .required("Date and time are required")
    .test("is-future-date", "Date and time must be in the future", (value) => {
      return new Date(value) > new Date();
    }),
});

export const bookingCreateSchema = yup.object({
  service_id: yup.string().required("Please select a service"),
  address: yup.string().required("Address is required"),
  date_time: yup
    .string()
    .required("Date and time are required")
    .test("is-future-date", "Date must be in the future", (value) => {
      return new Date(value) > new Date();
    }),
});

export const signupSchema = yup.object({
  full_name: yup.string().required("Full name is required"),
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  password_confirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

export const serviceCreateSchema = yup.object({
  name: yup
    .string()
    .required("Service name is required")
    .min(3, "Service name must be at least 3 characters"),
});
