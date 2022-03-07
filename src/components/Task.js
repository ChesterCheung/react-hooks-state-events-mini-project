import React from "react";

function Task({taskText, taskCategory, handleRemoveTask}) {

  function handleClick(){
    handleRemoveTask(taskText)
  }
  
  return (
    <div className="task">
      <div className="label">{taskCategory}</div>
      <div className="text">{taskText}</div>
      <button onClick={handleClick} className="delete">X</button>
    </div>
  );
}

export default Task;