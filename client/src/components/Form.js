import { useEffect, useState } from "react";

function Form({ userId, onAddPlan }) {
  const [plans, setPlans] = useState([]);
  const [planName, setPlanName] = useState("");
  const [packageList, setPackageList] = useState("");
  const [formErrors, setFormErrors] = useState([]);

  useEffect(() => {
    fetch("/plans")
      .then((r) => r.json())
      .then(setPlans);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      user_id: userId,
      plan_name: planName,
      package: packageList,
    };
    fetch("/plans", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newPlan) => {
          onAddPlan(newPlan);
          setFormErrors([]);
        });
      } else {
        r.json().then((err) => setFormErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="plan">Plan:</label>
      <select
        id="plan"
        name="plan"
        value={planName}
        onChange={(e) => setPlanName(e.target.value)}
      >
        <option value="">Select a plan</option>
        {plans.map((plan) => (
          <option key={plan.id} value={plan.id}>
            {plan.plan_name}
          </option>
        ))}
      </select>
      <label htmlFor="pizza_id">Package:</label>
      <input
        type="package"
        value={packageList}
        onChange={(e) => setPackageList(e.target.value)}
      />
      {formErrors.length > 0
        ? formErrors.map((err) => (
            <p key={err} style={{ color: "red" }}>
              {err}
            </p>
          ))
        : null}
      <button type="submit">Add Plan To User</button>
    </form>
  );
}

export default Form;
