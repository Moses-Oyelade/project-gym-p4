import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




function Enrolled() {

    const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/users')
    .then((r) => r.json())
    .then(setUsers);
  },[]);

  function handleDelete(id){
    fetch(`/users/${id}`,{
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUsers((users) =>
        users.filter((user) => user.id !== id)
        );
      }
    });
  }

  return (
    <>
        <h2>Enrolled Info</h2>
        <section className="user_container">
        {users.map((user) => (
          <div key={user.id} className="card">
            <h2>
              <Link to = {`/users/${user.id}`}>{user.name}</Link>
            </h2>
            <h5>Gender: {user.gender}</h5>
            <h5>E-mail: {user.email}</h5>
            <p>Subcription:{user.plans}</p>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </div>
        ))}
        </section>    
    </>
  )
}

export default Enrolled