const Todos: React.FC<{ todos: string[] }> = ({ todos }) => (
  <ul>
    {todos.map((todo) => (
      <li>{todo}</li>
    ))}
  </ul>
);

export default Todos;
