import React, { useState, ReactNode } from 'react';
import { Tabs, Tab, Stack, Box, Typography } from '@mui/material';
import CodeBlock from './CodeBlock';

interface TabPanelProps {
    children?: ReactNode;
    index: number;
    value: number;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography component='div'>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const CodePreview = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
      };

      const codeString = '(num) => num + 1';

    return (
        <Stack>
            {/* <Typography variant='h5'>CodePreview</Typography> */}
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Context" {...a11yProps(0)} />
                <Tab label="Provider" {...a11yProps(1)} />
                <Tab label="Custom Hook"  {...a11yProps(2)}/>
            </Tabs>
            <TabPanel value={value} index={0}>
                <CodeBlock codeString={`// ./context/ReactContext.ts
import {createContext, Dispatch, SetStateAction} from 'react';
import {Todo} from '../types';

interface TodoContextProps {
    todoList: Todo[],
    setTodoList: Dispatch<SetStateAction<Todo[]>>
}

export const TodoContext = createContext<TodoContextProps | undefined>(undefined);
`}
                />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <CodeBlock codeString={`// ./providers/ReactProvider.ts
import { useState, FC, ReactNode } from 'react';
import { TodoContext } from '../context/ReactContext';
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
  
    return (
      <TodoContext.Provider value={
        {
            todoList,
            setTodoList,
        }
      }>
        {children}
      </TodoContext.Provider>
    );
}
`}
                />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <CodeBlock codeString={`// ./hooks/useReactContext.ts
import { useContext } from 'react';
import { TodoContext } from '../context/ReactContext';

export const useTodoDispatch = () => {
    const context = useContext(TodoContext)
    if (context === undefined) {
      throw new Error('useTodoDispatch must be used within a TodoProvider');
    }
    return context;
}
`}
                />
            </TabPanel>
        </Stack>
    )
}

export default CodePreview;