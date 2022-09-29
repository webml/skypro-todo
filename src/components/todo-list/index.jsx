import { useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/todo";
import { Todo } from "../todo";

import styles from "./index.module.css";

export const TodoList = (props) => {
  const todos = useSelector(todosSelector);

  let filterTodoList = (todo) => {
    switch (props.filter) {
      case "all":
        return true;

      case "done":
        return todo.completed === true ? true : false;

      case "current":
        return todo.completed === false ? true : false;

      default:
        console.log("Ошибка при проверке на выполнение");
    }
  };

  return (
    <ul className={styles.list}>
      {todos.map(
        (todo) => filterTodoList(todo) && <Todo key={todo.id} todo={todo} />
      )}
    </ul>
  );
};
