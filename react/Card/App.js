import React,{useState} from'react'
import Card from'./Components/Card1';

import phr from'./assets/images/Fourth Food.jpeg'


import React,{useState} from'react;


import PopupForm from'./Components/PopupForm';
import './App.css';

const App=() =>{
  return(
    
        <div className="Card-container">
      <Card title="Protein Rich Foods"  description={<>img elements must have an alt prop,<br />either with meaningful text,<br/> or an empty string</>} 
        src={phr} 
      />
      <Card src={phr} title={"Healthy Foods"} description={<>img elements must have an alt prop,<br/>either with meaningful text ,<br/>or an empty string</>}/>

    </div>)
    const [show,setShow]=useState(false);
    const fromClose=()=>{
      setShow(false);
    }
   return(
    <div>
      {show?<PopupForm closeForm={fromClose}/>:
      (
        <button onClick={()=>setShow(true)}>open form</button>
      )}
    </div>
   ) 
}


export default App;
