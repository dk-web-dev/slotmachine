import React from 'react';

const Match = (props) => {
    return(
        <>
        <div className="slot_div">
         <h3>{props.x} {props.y} {props.z}</h3>
         <h3 className="Heading_style">this is matching</h3>
        </div>
        </> 
      ); 
}

export default Match;