export const Filter = (props) => {
  const setFilter = (event) => {
    props.updateState(event.target.value);
  };

  return (
    <select onChange={setFilter}>
      <option value="all" defaultValue>
        Все
      </option>
      <option value="done">Выполненные</option>
      <option value="current">Текущие</option>
    </select>
  );
};
