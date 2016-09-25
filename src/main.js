import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';

const template = (
  <div style={{ maxWidth: '600px' }}>
    <LoginForm onSubmit={({ username, password }) => console.log(username, password)} />
  </div>
);

ReactDOM.render(template, document.getElementById('app'));

