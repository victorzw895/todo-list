import { useState } from 'react'
import TodoList from './components/TodoList';
import TodoPreview from './components/TodoPreview';
import CodePreview from './components/CodePreview';
import { TodoProvider } from './providers/TodoProvider';
import { Container, Stack } from '@mui/material';
import './App.css'

function App() {
  return (
    <TodoProvider>
      <Container maxWidth="xl" sx={{height: '100%'}}>
        <Stack direction='row' justifyContent='space-around'>
          <Stack>
            <TodoList />
            <TodoPreview />
          </Stack>
          <CodePreview />
        </Stack>
      </Container>
    </TodoProvider>
  )
}

export default App
