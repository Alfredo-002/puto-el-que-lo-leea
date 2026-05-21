import { useState } from 'react';
import { VALID_USER, VALID_PASS } from '../utils/userMapper';

export default function LoginScreen({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (username.trim() === VALID_USER && password === VALID_PASS) {
      setError('');
      onLogin();
    } else {
      setError('Usuario o contraseña incorrectos.');
    }
  }

  return (
    <section className="screen" aria-label="Pantalla de inicio de sesión">
      <div className="card login-card">
        <h1 className="login-title">RandomUser</h1>
        <p className="login-subtitle">Bienvenido. Inicia sesión para continuar.</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="input-username">Usuario</label>
            <input
              id="input-username"
              type="text"
              placeholder="Ingresa tu usuario"
              autoComplete="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="input-password">Contraseña</label>
            <input
              id="input-password"
              type="password"
              placeholder="Ingresa tu contraseña"
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <p className="login-error" role="alert" aria-live="assertive">
              {error}
            </p>
          )}

          <button type="submit" className="btn-gradient">
            Continuar
          </button>
        </form>
      </div>
    </section>
  );
}
