import React from "react";
import Task from "./Task";

function TaskList({tasks, handleRemoveTask}) {
  return (
    <div className="tasks">
      {tasks.map(taskObj => 
      <Task 
      handleRemoveTask={handleRemoveTask} 
      taskText={taskObj.text} 
      key={taskObj.text} 
      taskCategory={taskObj.category}/>)}
    </div>
  );
}

export default TaskList;