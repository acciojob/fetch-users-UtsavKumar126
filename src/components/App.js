
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[data,setData]=useState(null);

  async function fetchData(){
    const response=await fetch(" https://reqres.in/api/users");
    const data=await response.json();
    setData(data.data);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Blue Whales</h1>
        <button onClick={()=>fetchData()}>Get User List</button>
        <table>
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </thead>
          <tbody>
            {
              !data?<h4>No data found to display</h4>:
              data.map((ele)=>
              <tr>
                <td>{ele.first_name}</td>
                <td>{ele.last_name}</td>
                <td>{ele.email}</td>
                <td><img src={ele.avatar}/></td>
              </tr>
              )
            }
          </tbody>
        </table>
    </div>
  )
}

export default App
