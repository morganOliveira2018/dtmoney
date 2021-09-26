import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs'
import { App } from './App';

createServer({
  // 1º definir as rotas que vou ter na minha API Fake:
  routes() {
    this.namespace = 'api'; // vai direcionar toda requisição a partir do /api
 
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transation 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt:  new Date(),
        }
      ]
    }) 
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


