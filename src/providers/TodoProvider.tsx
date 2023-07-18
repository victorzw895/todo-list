import { useState, FC, ReactNode } from 'react';
import { TodoContext } from '../context/TodoContext';
import { Todo } from '../types';

const initialTodo: Todo = {
  title: 'my first todo',
  dueDate: new Date(),
  completed: false,
}

interface TodoProviderProps {
    children: ReactNode,
}

export const TodoProvider: FC<TodoProviderProps> = ({ children }) => {
  const [todoList, setTodoList] = useState([initialTodo])
  const [preview, setPreview] = useState<Todo | null>(null);
  
    return (
      <TodoContext.Provider value={
        {
            todoList,
            setTodoList,
            preview,
            setPreview
        }
      }>
        {children}
      </TodoContext.Provider>
    );
  }