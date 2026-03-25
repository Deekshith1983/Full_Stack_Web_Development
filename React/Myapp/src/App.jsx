import { useState } from "react"
import './App.css'
import My_firstcompo from './My_firstcompo.jsx'
import Openform from './Openform.jsx'
import { StrictMode } from "react"
function App() {
  const [showMyCompo, setShowMyCompo] = useState(false);
  const [showOpenform, setShowOpenform] = useState(false);

  const handleClick = () => {
    setShowMyCompo(true);
    setShowOpenform(false);  
  };

  const handleC = () => {
    setShowOpenform(true);
    setShowMyCompo(false);  
  };

  return (
    <>
      <h1>Hello World!</h1>

      <div className="parent">
        <button className="mybut" onClick={handleClick}>Click me</button>
        {showMyCompo && <My_firstcompo />}
      </div>
      <br /><br />
      <div className="parent">
        <button className="mybut" onClick={handleC}>Open the form</button>
        {showOpenform && <Openform />}
      </div>
    </>
  );
}

export default App;