import React from 'react';
import Emoji from './Emoji';
import Match from './Match';
import Notmatch from './Notmatch';

const SlotM = (props) => { // SlotM componernt code

   let x = props.x;
   let y = props.y;
   let z = props.z;

   
  if((x===y) && (y===z)){  
       //Match component 
    return <Match 
                 x ={props.x} 
                 y ={props.y} 
                 z ={props.z} 
              />
    // return(
    //   <>
    //   <div className="slot_div">
    //    <h3>{x} {y} {z}</h3>
    //    <h3>this is matching</h3>
    //   </div>
    //   </> 
    // ); 
   
  }
  else{
       //Notmatch Component
     return <Notmatch 
               x ={props.x} 
               y ={props.y} 
               z ={props.z} 
            />
    // return(
    //   <>
    //   <div className="slot_div">
    //    <h3>{x} {y} {z}</h3>
    //    <h3>this is not matching</h3>
    //   </div>
    //   </> 
    // );
  }

}


const App = () => {
     return (
       <>
         <h3 className="Heading_style"> 🎰 welocme to 
               {" "}<span>SlotMachine</span> Dashboard 🎰 </h3>
         {
           Emoji.map((val) => {  //map method
             return (
               <SlotM key= {val.id}
                      x = {val.x} 
                      y = {val.y}
                      z = {val.z}
                />
             );
           })
         }
          
       </>
     );
}

export default App;