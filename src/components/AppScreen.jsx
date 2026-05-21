import { useState } from 'react';
import { fetchRandomUser } from '../utils/userMapper';
import ProfileCard from './ProfileCard';
import IconBar from './IconBar';

export default function AppScreen({ onLogout }) {
  const [user, setUser]                   = useState(null);
  const [activeCategory, setActiveCategory] = useState('password');
  const [isLoading, setIsLoading]         = useState(false);
  const [error, setError]                 = useState(null);

  async function handleGenerate() {
    setIsLoading(true);
    setError(null);
    try {
      const newUser = await fetchRandomUser();
      setUser(newUser);
    } catch {
      setError('No se pudo cargar el usuario. Verifica tu conexión e intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  }

  function handleLogout() {
    setUser(null);
    setActiveCategory('password');
    setError(null);
    onLogout();
  }

  return (
    <main className="screen" role="main">
      <div className="card app-card">
        {/* Header */}
        <header>
          {user && (
            <button
              id="btn-logout"
              aria-label="Cerrar sesión"
              onClick={handleLogout}
            >
              Cerrar sesión
            </button>
          )}
        </header>

        {/* Loading spinner */}
        {isLoading && (
          <div
            id="loading-spinner"
            role="status"
            aria-label="Cargando usuario"
          />
        )}

        {/* Error message */}
        {error && !isLoading && (
          <p
            id="error-message"
            role="alert"
            aria-live="assertive"
          >
            {error}
          </p>
        )}

        {/* Profile card */}
        {user && !isLoading && (
          <ProfileCard user={user} activeCategory={activeCategory} />
        )}

        {/* Icon bar */}
        <IconBar
          activeCategory={activeCategory}
          onCategoryClick={setActiveCategory}
        />

        {/* Generate button */}
        <button
          id="btn-generate"
          className="btn-gradient"
          onClick={handleGenerate}
          disabled={isLoading}
        >
          {isLoading ? 'Cargando...' : 'Generar usuario'}
        </button>
      </div>
    </main>
  );
}
