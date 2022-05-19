import React from 'react';

const Notmatch = (props) => {
    return(
        <>
        <div className="slot_div">
         <h3>{props.x} {props.y} {props.z}</h3>
         <h3 className="Heading_style">this is not matching</h3>
        </div>
        </> 
      );
}

export default Notmatch;