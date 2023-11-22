import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";


function RegiForm() {
  const [users, setUsers] = useState([{}]);
  const [refreshPage, setRefreshPage] = useState(false);
  

  useEffect(() => {
    console.log("FETCH! ");
    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, [refreshPage]);

  const formSchema = yup.object().shape({
    name: yup.string().required("Must enter a name").max(15),
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

  const formik = useFormik({
    initialValues: {
      name: "",
      gender: "",
      age: "",
      email: "",
      phone: "",
      
     

      
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
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
      <h1>User sign up form</h1>
      <form onSubmit={formik.handleSubmit} style={{ margin: "30px" }}>
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
        <button type="submit">Submit</button>
      </form>
      
      {/* <table style={{ padding: "15px" }}>
        <tbody>
          <tr>
            <th>name</th>
            <th>gender</th>
            <th>age</th>
            <th>email</th>
            <th>phone</th>
          </tr>
          {users === "undefined" ? (
            <p>Loading</p>
          ) : (
            users.map((user, i) => (
              <>
                <tr key={i}>
                  <td>{user.name}</td>
                  <td>{user.gender}</td>
                  <td>{user.age}</td>                 
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              </>
            ))
          )}
        </tbody>
      </table> */}
    </div>
  );
};

export default RegiForm