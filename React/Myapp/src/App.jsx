import Home from "./Pages/Home";
import Users from "./Pages/User";
import NotFound from "./Pages/NotFound";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState,createContext } from "react";

const UserContext = createContext();
export { UserContext };

function App(){
  const [userName, setUserName] = useState("John Doe"); 
  return (
    <UserContext.Provider value={{userName, setUserName}}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </UserContext.Provider>
  );
}
export default App;