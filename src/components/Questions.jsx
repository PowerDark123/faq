import React from "react";
import { useState } from 'react';

export const Questions=({data,setData})=>{
    console.log(data)
    return(
        <>
        <div className="row">
                 {data.map((obj)=>(
                    <h5>{obj.title} <input type="button" value="+" /> </h5>
        
             ))}
           
        </div>
        </>
    )
}