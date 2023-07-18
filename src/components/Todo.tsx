import React, { FC, useState } from 'react';
import { Todo } from '../types';
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
    TextField,
    Input,
} from '@mui/material';
import { useTodoDispatch } from '../hooks/useTodoContext';
import RenderCounter from '../util/renderCounter';

interface TodoProps {
    todo: Todo
}

const Todo = () => {
    // const {test} = useTodoDispatch();
    // const [title, setTitle] = useState(todo.title);

    return (
        // <ListItem>
        //     <ListItemButton
        //         role={undefined}
        //         // onClick={handleToggle(value)}
        //         dense
        //     >
        //       <ListItemIcon>
        //         <Checkbox
        //           edge="start"
        //         //   checked={checked.indexOf(value) !== -1}
        //           tabIndex={-1}
        //           disableRipple
        //         //   inputProps={{ 'aria-labelledby': labelId }}
        //         />
        //       </ListItemIcon>
        //       {/* <ListItemText primary={todo.title} /> */}
        //       {/* <Input value={todo.title} onChange={(e) => setTodoList()} /> */}
        //     </ListItemButton>
        // </ListItem>
        <>
            <div>Todo</div> 
            <RenderCounter componentName='Todo' />
        </>
    )
}

export default Todo;