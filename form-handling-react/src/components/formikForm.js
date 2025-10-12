import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  // ✅ Yup validation schema
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  // ✅ Formik onSubmit logic
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log("Server Response:", data);
      alert("User registered successfully!");

      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong!");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <h2>Formik Registration Form</h2>

        <label>Username:</label>
        <Field type="text" name="username" />
        <ErrorMessage name="username" component="div" style={{ color: "red" }} />

        <label>Email:</label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" style={{ color: "red" }} />

        <label>Password:</label>
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" style={{ color: "red" }} />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
