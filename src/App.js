import "./App.css";
// import data from db.json
import data from "./db.json";

import UserDetails from "./components/UserDetails";
import { useState } from "react";
function App() {

  const [d, setD] =useState(data);
 function handleSort(id){
 
console.log(id);
  let arr=d.sort((a, b) =>{
      let fa = a.first_name,
          fb = b.first_name;
  
      if (fa < fb) {
          return -1*id ;
      }
      if (fa > fb) {
          return 1* id;
      }
      return 0;
 
  
  })

  setD([...arr]);

 }

  return (
    <div className="App" data-testid = 'app'>
      <button  data-testid = 'sort-asc-btn' onClick={()=>{
         handleSort(1)
      }}>Sort by Asc</button>
      <button  data-testid = 'sort-desc-btn'
       onClick={()=>{
        handleSort(-1);
       }}>Sort by Desc</button>
      {/*  map through the users data and pass props to the Userdetails component */
      d.map((el) => (

         <UserDetails key={el.id}  user={el}/>
      ))
      
      }
    </div>
  );
}

export default App;
