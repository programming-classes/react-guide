import { useState } from "react";

const FilterTasks = (props) => {
  const [filter, setFilter] = useState({ title: "" });

  const onTitleChangeHandler = (event) => {
    const newFilter = { ...filter, title: event.target.value };
    setFilter(newFilter);

    props.onFilterChangeHandler(newFilter);
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
