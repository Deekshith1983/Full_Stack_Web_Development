import { useContext, useState } from "react";
import { UserContext } from "../App";
function Users(){
    const { userName, setUserName } = useContext(UserContext);
   
    return (
        <div>
            <h1>Users Page</h1>
            <p>Welcome {userName}!</p>
            <Userinput setUser={setUserName} />
        </div>
    );
}

function Userinput(props){
    const [userName, setUserName] = useState("");

    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter Your Name" 
                onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={() => props.setUser(userName)}>
                Submit
            </button>
        </div>
    );
}
export default Users;