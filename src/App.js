import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { steps } from './utils/steps';
import { theme } from './utils/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        steps={steps}
        floating
        placeholder="Digite aqui"
      />
    </ThemeProvider>
  )
}

export default App;
