import { useState } from "react";

// function Car(){
//   return (
//     <>
//       <p>This is a car component.</p>
//     </>
//   )
// }

function Vote(){
  return (
    <>
      <p>You can Vote!!</p>
    </>
  )
}

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



function MyFirstcompo() {
  
  const [age, setAge] = useState(0);
    return (
      <>
        <h1>My First Component</h1>
        <p>Age: {age}</p>
        {age >= 18 ? <Vote /> : <p>You are not old enough to vote.</p>}
        <button onClick={() => setAge(age + 1)}>Click Me</button>
      </>
    )

}


export default MyFirstcompo;