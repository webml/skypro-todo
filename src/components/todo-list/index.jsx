import { Todo } from "../todo";
import { useGetAllTodosQuery } from "../../services/todo";

import styles from "./index.module.css";

export const TodoList = (props) => {
  const { data, error, isLoading } = useGetAllTodosQuery();

  const isEmptyList = !isLoading && !data?.length;

  if (isLoading) {
    return <p>Loading…</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isEmptyList) {
    return <p>No todos, yay!</p>;
  }

  const filterTodoList = (todo) => {
    switch (props.filter) {
      case "all":
        return true;

      case "done":
        return todo.completed;

      case "current":
        return !todo.completed;

      default:
        throw new Error(
          `todo.completed содержит неизвестное значение.
          \ntodo.id: ${todo.id}
          \ntodo.completed: ${todo.completed}`
        );
    }
  };

  return (
    <ul className={styles.list}>
      {data.map(
        (todo) => filterTodoList(todo) && <Todo key={todo.id} todo={todo} />
      )}
    </ul>
  );
};
