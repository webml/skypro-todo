import styles from "./index.module.css";

export const Filter = (props) => {
  const setFilter = (event) => {
    props.updateState(event.target.value);
  };

  return (
    <select className={styles.filter} onChange={setFilter}>
      <option value="all" defaultValue>
        All
      </option>
      <option value="done">Done</option>
      <option value="current">Current</option>
    </select>
  );
};
