import React from 'react';
const person=(probs)=>{
 
    return (<div>
        <p>Change Name:<input type="text" onChange={probs.change}  value={probs.name} /> </p>
        <p>NAME: {probs.name}</p>
    <h2>{probs.family}</h2>
    </div>
    );
           
       
 
}
export default person;