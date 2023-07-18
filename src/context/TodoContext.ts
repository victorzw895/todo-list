import {createContext, Dispatch, SetStateAction} from 'react';
import {Todo} from '../types';

interface TodoContextProps {
    todoList: Todo[],
    setTodoList: Dispatch<SetStateAction<Todo[]>>,
    preview: Todo | null,
    setPreview: Dispatch<SetStateAction<Todo | null>>
  }

export const TodoContext = createContext<TodoContextProps | undefined>(undefined);
