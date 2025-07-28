function TodoItem({ text, onDelete }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {text}
      <button className="btn btn-sm btn-danger" onClick={onDelete}>🗑 delete</button>
    </li>
  );
}

export default TodoItem;