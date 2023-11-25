import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

function RegiForm() {
  const [refreshPage, setRefreshPage] = useState(false);

  const formSchema = yup.object().shape({
    name: yup.string().required("Must enter a name").max(20),
    gender: yup.string().required("Must enter male or Female").max(15),
    age: yup
      .number()
      .positive()
      .integer()
      .required("Must enter age")
      .typeError("Please enter Digit")
      .min(17),
    email: yup.string().email("Invalid email").required("Must enter email"),
    phone: yup
      .number()
      .positive()
      .integer()
      .required("Must enter age")
      .typeError("Please enter Digit")
    
  });

  function handleReset() {
    formik.values = (" ")
    
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      gender: "",
      age: "",
      email: "",
      phone: "",
      
    },

    
    validationSchema: formSchema,
    onSubmit: (values, {resetForm}) => {
      resetForm({ values: ''})
      handleReset() 

      fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 2),
      }).then((res)=>{
        console.log(res);
        if (res.status === 201) {
          setRefreshPage(!refreshPage);
        }
      });
    },
  });

  return (
    <div>
      <Link to = {'/about'}><button>Back</button></Link>
      <h1>User sign up form</h1>
      <form onSubmit={formik.handleSubmit}  style={{ margin: "30px" }}>
      <label htmlFor="name">Name</label>
        <br />
        <input
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <p style={{ color: "red" }}> {formik.errors.name}</p>

        <label htmlFor="gender">Gender</label>
        <br />
        <input
          id="gender"
          name="gender"
          onChange={formik.handleChange}
          value={formik.values.gender}
        />
        <p style={{ color: "red" }}> {formik.errors.gender}</p>

        <label htmlFor="age">age(16+)</label>
        <br />

        <input
          id="age"
          name="age"
          onChange={formik.handleChange}
          value={formik.values.age}
        />
        <p style={{ color: "red" }}> {formik.errors.age}</p>


        <label htmlFor="email">Email Address</label>
        <br />
        <input
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <p style={{ color: "red" }}> {formik.errors.email}</p>
        
        <label htmlFor="phone">Phone no.</label>
        <br />
        <input
          id="phone"
          name="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        <p style={{ color: "red" }}> {formik.errors.phone}</p>
        <button  type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegiForm