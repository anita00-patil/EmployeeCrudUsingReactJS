import React, {useState} from "react";



const Timer=()=>
{
    let time=new Date().toLocaleTimeString();

    const [ctime,setCtime]=useState(time);

    const UpdateTime=()=>{
        time=new Date().toLocaleTimeString();
        setCtime(time);
    };

    setInterval(UpdateTime,1000);
    return(
        <>
        <h1 style={{color:'red'}}>{ctime}</h1></>
    );
};

export default Timer;