import React, { useEffect, useState } from "react";
import cx from "classnames";
import {
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "../../services/todo";

import styles from "./index.module.css";

export const Todo = ({ todo }) => {
  const [updateTodo, { isLoadingUpdate }] = useUpdateTodoMutation();
  const [deleteTodo, { isLoadingDelete }] = useDeleteTodoMutation();

  const { id, title, completed } = todo;

  const toggleTodoItem = () => {
    updateTodo({ id, completed: !completed });
  };

  const deleteTodoItem = (element) => {
    element.stopPropagation();
    deleteTodo({ id });
  };

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoadingUpdate || isLoadingDelete) {
      return setIsLoading(true);
    } else {
      return setIsLoading(false);
    }
  }, [isLoadingUpdate, isLoadingDelete]);

  return (
    <li
      className={cx(styles.item, {
        [styles.loading]: isLoading,
      })}
      onClick={toggleTodoItem}
    >
      {completed ? "👌" : "👋"}{" "}
      <span
        className={cx({
          [styles.completed]: completed,
        })}
      >
        {title}
      </span>
      <button className={styles.deleteButton} onClick={deleteTodoItem}>
        ❌
      </button>
    </li>
  );
};
