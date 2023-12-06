import { useState } from "react";
import { Link } from "react-router-dom";

function Form({ userId, onAddPlan }) {
  const [planName, setPlanName] = useState("");
  const [packageList, setPackageList] = useState("");
  const [formErrors, setFormErrors] = useState([]);
  const [refreshPage, setRefreshPage] = useState(false);

  const packages = [
    "Strength, Circuit training, Swimming,  Dance, Kick bocking",
    "Burpee, Aerobic exercise, Yoga, Walking, Aerobics",
    "Stretching, Plank, Skipping rope, Pilates, Cycling",
    "Running, Squats, Lunge, Interval training, Rowing",
    "Push_up, High-intensity interval training, Hiking, Weightlifting",
]


const planType = [
    "Basic",
    "Jungle",
    "Premium",
    "Pro-max",
    "Master",
    ]

  function handleSubmit(e) {
    e.preventDefault();
    alert(`You have subcribed to ${planName}`)
    const formData = {
      user_id: userId,
      plan_name: planName,
      package: packageList,
    };
    

    setPlanName("")
    setPackageList("")

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
          setRefreshPage(refreshPage);
        });
      } else {
        r.json().then((err) => setFormErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="plan">Plan: </label>
      <select
        id="plan"
        name="plan"
        value={(planName, packageList)}
        onChange={(e) => setPlanName(e.target.value)}
      >
        <option value="">Select a plan</option>
        {planType.map((plan) => (
          <option key={plan.id} value={plan}>
            {plan}
          </option>
        ))}
      </select><br></br>
      <label htmlFor="">Package: </label>
      <select 
        type="package"
        value={packageList}
        onChange={(e) => setPackageList(e.target.value)}
      >
        <option value="">Select</option>
        {packages.map((pack) => (
          <option key={pack.id} value={pack}>
            {pack}
          </option>
        ))}
      </select>
      {formErrors.length > 0
        ? formErrors.map((err) => (
            <p key={err} style={{ color: "red" }}>
              {err}
            </p>
          ))
        : null}
        <br></br>
        <p>
          <button type="submit">Add Plan</button>
        </p>
        <p>
          <Link to = {`/enrolled`}><button type="Cancel">Back</button></Link>
        </p>
      
    </form>
  );
}

export default Form;
