import React from 'react'

const style = {
    backgroundColor : "white",
    font : "inherit",
    border : "1px solid blue",
    padding : "8px",
    cursor : "pointer"
  }
export default function Cockpit(props) {
    return (
        <div >
            <h1>This is Rivision-REACT</h1>
            <h2>let's crack the interview</h2>
            <button 
            style={style}
            onClick={props.clicked}
            >Switch</button>   
        </div>
    )
}



