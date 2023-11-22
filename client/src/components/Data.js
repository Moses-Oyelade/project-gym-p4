import React from 'react'


function Data({count, user}) {

    const {  id, name, gender, age, email, phone_no } = user


  return (
    <div>Data
        <tr className="userData">
        <td>{id}</td>
        <td>{name}</td>
        <td>{gender}</td>
        <td>{age}</td>
        <td>{email}</td>
        <td>{phone_no}</td>
    </tr>
    </div>
  )
}

// export default Data