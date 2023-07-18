import React, { useRef, useEffect, useState} from 'react';
import Todo from './Todo';
import { useTodoDispatch } from '../hooks/useTodoContext';
import RenderCounter from '../util/renderCounter';
import { 
    Stack,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Checkbox,
    IconButton,
    Input
} from '@mui/material';
import { Todo as TodoTypes } from '../types';

const TodoList = () => {
    // const [todoList, setTodoList] = useState<TodoTypes[]>([{title: '', dueDate: new Date(), completed: false}]);
    const {todoList, setTodoList, setPreview} = useTodoDispatch();

    const [value, setValue] = useState('');

    const handleUpdate = (e, i) => {
        setTodoList(todoList.map((todo, index) => {
            if (index === i) return e.target.value;
            else return todo
        }))
    }
    
    return (
        <Stack sx={{position: 'relative'}}>
            <Typography variant='h5'>Todo List</Typography>
            <RenderCounter componentName='TodoList' />
            <List sx={{position: 'relative'}}>
                <Todo />
                {
                    todoList.map((todo, i) => (
                        // <Todo todo={todo}/>
                        <ListItem key={`item-${i}`} disablePadding disableGutters>
                            <ListItemButton
                                // role={undefined}
                                // onClick={handleToggle(value)}
                                dense
                                disableGutters
                            >
                                <ListItemIcon>
                                    <Checkbox
                                    // edge="start"
                                    //   checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    //   inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText primary={todo.title} onClick={() => setPreview((prev) => {
                                    if (prev?.title === todo.title && prev.dueDate === todo.dueDate) {
                                        return null
                                    }
                                    return todo
                                })} />
                                {/* <Input defaultValue={todo.title} onChange={(e) => handleUpdate(e, i)} /> */}
                            </ListItemButton>
                        </ListItem>
                    ))
                }
                <Input
                    value={value}
                    onChange={(e) => setValue(e.currentTarget.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            setTodoList((prev) => ([...prev, {
                                title: e.currentTarget.value,
                                dueDate: new Date(),
                                completed: false
                            }]))
                            
                            setValue('')
                        }
                    }}
                />
            </List>
        </Stack>
    )
}

export default TodoList;