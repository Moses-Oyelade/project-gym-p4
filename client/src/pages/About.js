import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function About() {
  const [instructors, setInstructors] = useState([{}]);
  const [index, setIndex] = useState(0)

  useEffect(() => {
    fetch('/instructors')
    .then((r) => r.json())
    .then((r) => 
          setInstructors(r))
    
  },[]);

  // function handleDelete(id){
  //   fetch(`/instructors/${id}`,{
  //     method: "DELETE",
  //   }).then((r) => {
  //     if (r.ok) {
  //       setInstructors((instructors) =>
  //       instructors.filter((instructor) => instructor.id !== id)
  //       );
  //     }
  //   });
  // }
console.log(instructors)

const results = [];



    instructors.forEach(instructor => {
      results.push(instructor);
        });

let containPrev = index > 0;
let containNext = index < results.length -1;

  function handlePrevClick(){
    if (containPrev){
      return setIndex(index - 1)
    }
  }

  function handleNextClick(){
    if (containNext){
      return setIndex(index + 1)
    }
    if (index === results.length - 1);
      return setIndex(0);
  }


   let result = results[index];

  


  return (
    <div>
      <h1>Our Instructors</h1>
      
      <section className="user_container">
            {/* {result} */}
          <div key = {result.id}className="card">
                <h3>
                ({index + 1} of {results.length})
               </h3>
               <h2>
                 {result.name}
               </h2>
               <h5>Gender: {result.gender}</h5>
               <h5>Level: {result.level}</h5>
               <div>
              <button onClick={handlePrevClick}>Previous</button>
              <button onClick={handleNextClick}>Next</button>
            </div>
            <p>
              <Link to = {`/register`} ><button>Click here to Register</button></Link>
            </p>
          </div>
      </section>    
    </div>
  );
}

export default About