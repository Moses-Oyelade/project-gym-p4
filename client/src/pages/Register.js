import React, { useEffect, useState} from 'react'
// import Filter from "../components/Filter";
// import Data from "../components/Data";
import RegiForm from '../components/RegiForm';


function Register() {
    const [users, setUsers] = useState([]);
    // const [newChange, setNewChange] = useState([])
    // const [search, setSearch] = useState("");

    // let count = 1


    useEffect(() => {
        fetch("/users")
        .then((res) => res.json())
        .then((users) => setUsers(users));
    
      }, [users])

  
    //   function handleFilterChange (e) {
    //       e.preventDefault();
    //       console.log(e.target.value)
    //       setSearch(e.target.value)
  
    //   }
  
    //       useEffect(() => {
    //         console.log("filter")
    //       fetch("/users")
    //       .then((r) => r.json())
    //       .then((users) => 
    //           setUsers(users))
          
    //         },[search, setUsers]);
      
      
    //   const displayedUsers= users.filter((user) =>
    //   user.name.toLowerCase().includes(search.toLowerCase())
    // );
    
  return (
    <>
        <div>
            <h1>Register</h1>
        </div>
        {/* <div>
            <Filter search = {search}
            onSearchChange={setSearch}
            />
        </div> */}
        <div>
            <RegiForm
            //    users={displayedUsers}
            />
        </div>
    </>
  )
}

export default Register