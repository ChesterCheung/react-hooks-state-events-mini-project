import React, {useState} from "react";

function NewTaskForm({addTask, categories}) {
 const [text, setText] = useState("")
 const [category, setCategory] = useState("Food")

  const onTaskFormSubmit  = (e) =>{
    e.preventDefault()
    const newTask = {
      text: text,
      category: category,
    }
    addTask(newTask)
  }

  function onTaskChange(e){
    setText(e.target.value)
  }
  function onCategoryChange(e){
    setCategory(e.target.value)
  }

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit }>
      <label>
        Details
        <input type="text" name="text" onChange={onTaskChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={onCategoryChange}>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
