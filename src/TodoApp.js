import React, {useState} from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), title: input, completed: false }
    ]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(
        todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
      <div style={{ maxWidth: 400, margin: "auto" }}>
        <h2>Todo List</h2>
        <div>
          <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Add a todo"
          />
          <button onClick={addTodo}>Add</button>
        </div>
        <div style={{ margin: "10px 0" }}>
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("completed")}>Completed</button>
          <button onClick={() => setFilter("incomplete")}>Incomplete</button>
        </div>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredTodos.map(todo => (
              <li key={todo.id} style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                />
                <span
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                      flex: 1,
                      marginLeft: 8
                    }}
                >
              {todo.title}
            </span>
                <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: 8 }}>
                  Delete
                </button>
              </li>
          ))}
        </ul>
      </div>
  );
}

export default TodoApp;