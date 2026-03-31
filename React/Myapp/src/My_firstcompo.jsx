import { useEffect, useState } from "react";
import axios from "axios";


//Handling List in React using usestate hooK
function My_firstcompo(){
  const [users, setUsers] = useState([]);

useEffect(()=>{
    axios.get("http://localhost:3000/user")
    .then(response=>response.data)
    .then(data=>setUsers(data)
    )
},[]);


function AddUser(name, age){
  axios.post("http://localhost:3000/user", {name, age})
  .then(response=>response.data)
  .then(data=> {
    setUsers([...users, data]);
  });
}

function DeleteUser(_id){
  setUsers(users.filter((u)=>u._id !== _id));
  
}
  return (
    <>
     <h1>This is First Component</h1>
     <input type="text" placeholder="Enter the Name" onChange={(e)=>console.log(e.target.value)}/> <br></br>
     <input type="text" placeholder="Enter the Age" onChange={(e)=>console.log(e.target.value)}/> <br></br>
     <button onClick={() => AddUser(document.querySelector("input").value, document.querySelectorAll("input")[1].value)}>Add User</button>
      <ul>
        {users.map(user => (
          <div className="card" style={{ width: "18rem" }}>
  <div className="card-body">
    <h5 className="card-title">{user.name}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{user.age}</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <button onClick={() => DeleteUser(user._id)}>Delete User</button>
  </div>
</div>
        ))}
      </ul>

    </>
  )
}

// function Car(){
//   return (
//     <>
//       <p>This is a car component.</p>
//     </>
//   )
// }

// function Vote(){
//   return (
//     <>
//       <p>You can Vote!!</p>
//     </>
//   )
// }

//Props are used to pass data from one component to another. 
// They are read-only and cannot be modified by the child component. 
//Props are passed as an object to the child component and can be accessed using the props keyword.
// function MyFirstcompo(props) {

//   var age= props.age;
//     return (
//         <>
//             <h1>My First Component</h1>
//             {/* Condtional rendering */}
//             {/* {age > 18 ? <Vote /> : <p>You are not old enough to vote.</p>} */}
//             {age>18 && <Vote />}
//         </>
//     );
// }



// function MyFirstcompo() {
  
//   const [age, setAge] = useState(0);
//     return (
//       <>
//         <h1>My First Component</h1>
//         <p>Age: {age}</p>
//         {age >= 18 ? <Vote /> : <p>You are not old enough to vote.</p>}
//         <button onClick={() => setAge(age + 1)}>Click Me</button>
//       </>
//     )

// }


export default My_firstcompo;