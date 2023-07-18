import React from 'react';
import { Typography } from '@mui/material';
import { useTodoDispatch } from '../hooks/useTodoContext';
import RenderCounter from '../util/renderCounter';

const Preview = () => {
    const { preview } = useTodoDispatch();

    return (
        <div>
            <Typography>Preview</Typography>
            <Typography>{preview?.title}</Typography>
            <Typography>{preview?.dueDate.toDateString()}</Typography>
            <Typography>{preview?.completed}</Typography>
            <RenderCounter componentName='Preview' />
        </div>
    )
}

export default Preview;