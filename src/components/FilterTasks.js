import { useState } from "react";

const FilterTasks = (props) => {
  const [filter, setFilter] = useState({title: ""});

  const onTitleChangeHandler = (event) => {
      setFilter({...filter, title: event.target.value})

      props.onFilterChangeHandler(filter)
  };

  return (
    <input
      onChange={onTitleChangeHandler}
      type="text"
      placeholder="Search Tasks"
      value={filter.title}
    />
  );
};

export default FilterTasks;
