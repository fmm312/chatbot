import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#f5f8fb',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};
class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Resumo</h3>
        <table>
          <tbody>
            <tr>
              <td>Nome</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Gênero</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Idade</td>
              <td>{age.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

const steps = [
  {
    id: '1',
    message: 'Qual o seu nome?',
    trigger: 'name',
  },
  {
    id: 'name',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Oi {previousValue}! Qual é o seu gênero?',
    trigger: 'gender',
  },
  {
    id: 'gender',
    options: [
      { value: 'male', label: 'Masculino', trigger: '5' },
      { value: 'female', label: 'Feminino', trigger: '5' },
    ],
  },
  {
    id: '5',
    message: 'Quantos anos você tem?',
    trigger: 'age',
  },
  {
    id: 'age',
    user: true,
    trigger: '7',
    validator: (value) => {
      if (isNaN(value)) {
        return 'O valor deve ser um número';
      } else if (value < 0) {
        return 'O valor deve ser positivo';
      } else if (value > 120) {
        return `${value}? Vamos!`;
      }

      return true;
    },
  },
  {
    id: '7',
    message: 'Ótimo! Confira seus dados:',
    trigger: 'review',
  },
  {
    id: 'review',
    component: <Review />,
    asMessage: true,
    trigger: 'update',
  },
  {
    id: 'update',
    message: 'Você gostaria de atualizar algum campo?',
    trigger: 'update-question',
  },
  {
    id: 'update-question',
    options: [
      { value: 'yes', label: 'Sim', trigger: 'update-yes' },
      { value: 'no', label: 'Não', trigger: 'end-message' },
    ],
  },
  {
    id: 'update-yes',
    message: 'Que campo você gostaria de atualizar?',
    trigger: 'update-fields',
  },
  {
    id: 'update-fields',
    options: [
      { value: 'name', label: 'Nome', trigger: 'update-name' },
      { value: 'gender', label: 'Gênero', trigger: 'update-gender' },
      { value: 'age', label: 'Idade', trigger: 'update-age' },
    ],
  },
  {
    id: 'update-name',
    update: 'name',
    trigger: '7',
  },
  {
    id: 'update-gender',
    update: 'gender',
    trigger: '7',
  },
  {
    id: 'update-age',
    update: 'age',
    trigger: '7',
  },
  {
    id: 'end-message',
    message: 'Obrigado! Seus dados foram enviados com sucesso!',
    end: true,
  },
]

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          floating
        />
      </ThemeProvider>
    );
  }
}

export default App;