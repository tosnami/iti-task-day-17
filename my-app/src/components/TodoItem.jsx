import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo }) {
  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        <TodoItem 
          key={index} 
          text={todo} 
          onDelete={() => deleteTodo(index)} 
        />
      ))}
    </ul>
  );
}

export default TodoList;