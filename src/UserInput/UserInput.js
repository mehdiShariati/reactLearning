import React from 'react';

const UserInput=(probs)=>{
    const style={
        border:"2px solid red",
        cursor:"pointer"
    }
    return <input style={style} type="text" onChange={probs.change} value={probs.currentName} />
}
export default UserInput; 