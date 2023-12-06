import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Form from "./Form";


function Display() {
    
    const [{ data: user, error, status }, setUser] = useState({
        data: null,
        error: null,
        status: "pending",
      });
      const { id } = useParams();
    
    useEffect(() => {
        fetch(`/users/${id}`)
        .then((r) => {
          if (r.ok) {
            r.json().then((user) =>
              setUser({ data: user, error: null, status: "resolved" })
            );
          } else {
            r.json().then((err) =>
              setUser({ data: null, error: err.error, status: "rejected" })
            );
          }
        });
    }, [id]);

    
    function handleAddPlan() {
        setUser({
          data: {
            ...user,
            plans: [user.plans],
          },
          error: null,
          status: "resolved",
        });
    }

    if (status === "pending") return <h1>Loading...</h1>;
    if (status === "rejected") return <h1>Error: {error.error}</h1>;

  return (
    <>
    <div>
      <h2>Display</h2>
        <section className="user_container">
      <div className="card">
        <h1>{user.name}</h1>
        <p>{user.gender}</p>
        <p>{user.age}</p>
        <p>{user.email}</p>
        <p>+{user.phone}</p>
      </div>
      <div className="card">
        {user.plans.map((plan) => (
          <div key={plan.id}>
            <h3>{plan.plan_name}</h3>
            <p>
              <em>{plan.package}</em>
            </p>
          </div>
        ))}
      </div>
      <div className="card">
        <h3>Add New Plan</h3>
        <Form userId={user.id} onAddPlan={handleAddPlan} />
      </div>
    </section>
    </div>
    </>
  )
}

export default Display