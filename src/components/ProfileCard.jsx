import { useState } from 'react';
import { CATEGORIES } from '../utils/userMapper';

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'%3E%3Ccircle cx='64' cy='64' r='64' fill='%23cccccc'/%3E%3C/svg%3E";

export default function ProfileCard({ user, activeCategory }) {
  const [imgSrc, setImgSrc] = useState(user.photo);
  const category = CATEGORIES.find(c => c.key === activeCategory);

  // Reset image when user changes
  if (imgSrc !== user.photo && user.photo) {
    setImgSrc(user.photo);
  }

  return (
    <section id="profile-card" aria-label="Tarjeta de perfil">
      <img
        id="user-photo"
        src={imgSrc}
        alt={user.name}
        onError={() => setImgSrc(PLACEHOLDER)}
      />
      <div className="info-panel" role="region" aria-label="Información del usuario">
        <p id="info-label">Mi {category.label} es</p>
        <p id="info-value">{user[activeCategory]}</p>
      </div>
    </section>
  );
}
