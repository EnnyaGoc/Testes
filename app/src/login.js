import React, { useState } from 'react';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [logado, setLogado] = useState(false);

  const handleLogin = () => {
    if (usuario === 'neilton' && senha === 'senha123') {
      setLogado(true);
    }
  };

  return (
    <div>
      {logado ? (
        <h1>Bem-vindo, Neilton</h1>
      ) : (
        <div>
          <h2>Tela de Login</h2>
          <input
            id="usuario"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input
            id="senha"
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button id="entrar" onClick={handleLogin}>
            Entrar
          </button>
        </div>
      )}
    </div>
  );
}
