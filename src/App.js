import "./App.css";
import { TodoList } from "./components/todo-list";
import { AddTodo } from "./components/add-todo";
import { Filter } from "./components/filter";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="App">
      <header className="App-header">
        <AddTodo />
        <Filter updateState={(value) => setFilter(value)} />
        <TodoList filter={filter} />
      </header>
    </div>
  );
}

export default App;
