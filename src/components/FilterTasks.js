const FilterTasks = ({ onChange }) => {
  const filterTaskChangehandler = (event) => {
    onChange(event.target.value);
  };
  return (
    <div>
      <label htmlFor="filter-task-input">Search</label>
      <input type="text" onChange={filterTaskChangehandler} />
    </div>
  );
};

export default FilterTasks;
