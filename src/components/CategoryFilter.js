import React from "react";

function CategoryFilter({categories, setStateCategory, stateCategory}) {
  const buttonElement = categories.map((category) => {
   const buttonClassName = category === stateCategory ? "selected" : null;
    return (
    <button 
      className={buttonClassName} 
      onClick={()=> setStateCategory(category)} 
      key={category}>
      {category}
    </button>)})

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonElement}
    </div>
  );
}

export default CategoryFilter;
