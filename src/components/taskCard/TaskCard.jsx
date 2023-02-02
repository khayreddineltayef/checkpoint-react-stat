import React from 'react'

export const TaskCard = ({el,del,comp }) => {
  
  return (
    <div className='task' style={{width:"96%"}}>
      
        <h1 style={{ width:"300px",border:"1px solid black",borderRadius:"10px",fontSize:"16px",textAlign:"start",
        wordWrap: "break-word"}} id={el.isDone?"completed":"incompleted"}>{el.task}</h1>
        <button style={{width:"50px",height:"40px", borderRadius:"5px"}} onClick={()=>del(el.id)}>Delete</button>
        <button  style={{width:"65px",height:"40px", borderRadius:"5px"}}  onClick={()=>comp(el.id)}>{el.isDone?"Undo":"Complete"}</button>

    </div>
  )
}
