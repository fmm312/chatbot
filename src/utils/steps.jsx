import Review from '../components/Review';

export const steps = [
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
