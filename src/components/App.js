import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTask] = useState(TASKS)
  const [stateCategory, setStateCategory] = useState("All")


  const addTask = (newTask) =>{
    setTask([...tasks, newTask])
  }

  
const handleRemoveTask = (id) => {
  const newTaskList = tasks.filter((task) => task.text !== id)
  setTask(newTaskList)
}

const visibleTask = tasks.filter((task) =>{
  if(stateCategory === "All"){
  return task
  }else{
    return stateCategory === task.category
  }
})

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} stateCategory={stateCategory} setStateCategory={setStateCategory}/>
      <NewTaskForm categories={CATEGORIES.filter((cat) => cat !== "All")} addTask={addTask}/>
      <TaskList categories={CATEGORIES} tasks={visibleTask} handleRemoveTask={handleRemoveTask}/>
    </div>
  );
}

export default App;