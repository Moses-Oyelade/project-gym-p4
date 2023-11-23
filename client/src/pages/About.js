import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function About() {
  const [instructors, setInstructors] = useState([]);
  const [likes, setLikes] = useState(0);
  const [disLikes, setDisLikes] = useState(0);
  const [index, setIndex] = useState(0)

  useEffect(() => {
    fetch('/instructors')
    .then((r) => r.json())
    .then(setInstructors);
  },[]);

  function handleDelete(id){
    fetch(`/instructors/${id}`,{
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setInstructors((instructors) =>
        instructors.filter((instructor) => instructor.id !== id)
        );
      }
    });
  }

  return (
    <div>
      <h1>Enrolled Info</h1>
      <section className="user_container">
        {instructors.foreach((instructor) => (
          <div key={instructor.id} className="card">
            <h2>
              {instructor.name}
            </h2>
            <h5>Gender: {u.gender}</h5>
            <h5>E-mail: {user.email}</h5>
            <p>Subcription:{user.plans}</p>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </div>
        ))} 
      </section>    
    </div>
  );
}

export default About