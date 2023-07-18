import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const useTodoDispatch = () => {
    const context = useContext(TodoContext)
    if (context === undefined) {
      throw new Error('useTodoDispatch must be used within a TodoProvider');
    }
    return context;
}