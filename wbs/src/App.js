
import './App.css';
import axios from "axios";
import react,{useState,useEffect} from "react";

function App() {

  let[berrie,setberrie]=useState("")
  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/berry/1").then((response)=>{setberrie(response.data.name)});
    console.log("test");
  })
  


  return (
    <div className="App">


      <input type="text" placeholder="please search for berries" onChange={(event)=>setberrie(event.target.value)}/><button></button>
    </div>
  );
}

export default App;
