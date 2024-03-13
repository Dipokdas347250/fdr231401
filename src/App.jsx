import { useState } from "react"

function App() {


  let [ami, setAmi] = useState(0)
  let [show, setShow] = useState(false)

  let handleIncrement = () =>{
    if(ami < 20){
      setAmi(ami + 1);
    }
  };
  let handelDecrement = () =>{
    if(ami > 1){
      setAmi(ami - 1);
    }
    
  };
  let handleClick = () =>{
    setShow(!show)
  }

  return (
   <>
    <button onClick={handelDecrement}>-</button>
    <h2>{ami}</h2>
    <button onClick={handleIncrement}>+</button>
    <br />
    <button onClick={handleClick}>Input</button>
     {show == true && <div className="one"></div>}
   
   </>
  );
}

export default App
