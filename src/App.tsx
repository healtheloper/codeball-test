import { useRef, useState } from 'react';

import Todos from '@components/Todos';

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<string[]>(['ㅎㅇ']);
  return (
    <div>
      <h1>Hello World</h1>
      <input ref={inputRef} type="text" />
      <button
        type="button"
        onClick={() => {
          if (!inputRef.current) return;
          const newTodo = inputRef?.current?.value;
          setTodos([...todos, newTodo]);
        }}
      >
        생성
      </button>
      <Todos todos={todos} />
    </div>
  );
};

export default App;
