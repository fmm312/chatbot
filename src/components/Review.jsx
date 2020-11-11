import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Review extends Component {
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
