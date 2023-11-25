import React, { useEffect, useState} from 'react'
// import Filter from "../components/Filter";
// import Data from "../components/Data";
import RegiForm from '../components/RegiForm';


function Register() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("/users")
        .then((res) => res.json())
        .then((users) => setUsers(users));
    
      }, [users])

    
  return (
    <>
        <div>
            <h4>Register and become Enrolled</h4>
        
            <RegiForm/>
        </div>
    </>
  )
}

export default Register