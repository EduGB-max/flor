import React, { useState } from 'react';

const LoginPage = () => {
  // Declara o estado dos campos do formulário
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Função para processar o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: validar as credenciais do usuário e redirecionar para a página principal
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Usuário:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default LoginPage;
