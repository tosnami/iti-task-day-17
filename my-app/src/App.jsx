import { useState } from 'react';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const deleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
      <Navbar />

      <div
        className="px-3 py-4"
        style={{
          width: '100vw',        
          minHeight: '100vh',    
          backgroundColor: '#f8f9fa',
        }}
      >
        <h2 className="text-center mb-4">📋toodoo list</h2>

        <div className="input-group mb-3 w-100">
          <input
            type="text"
            className="form-control"
            placeholder="add new task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn btn-primary" onClick={addTodo}>
            add
          </button>
        </div>

        {todos.length === 0 ? (
          <p className="text-center text-muted">you dont have task yet</p>
        ) : (
          <TodoList todos={todos} deleteTodo={deleteTodo} />
        )}
      </div>
    </>
  );
}

export default App;