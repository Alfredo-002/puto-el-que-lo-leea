import { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import AppScreen from './components/AppScreen';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {/* Decorative background circles */}
      <div className="bg-circle bg-circle--teal"   aria-hidden="true" />
      <div className="bg-circle bg-circle--pink"   aria-hidden="true" />
      <div className="bg-circle bg-circle--blue"   aria-hidden="true" />
      <div className="bg-circle bg-circle--yellow" aria-hidden="true" />

      {loggedIn
        ? <AppScreen onLogout={() => setLoggedIn(false)} />
        : <LoginScreen onLogin={() => setLoggedIn(true)} />
      }
    </>
  );
}
