import { CATEGORIES } from '../utils/userMapper';

export default function IconBar({ activeCategory, onCategoryClick }) {
  return (
    <nav id="icon-bar" aria-label="Categorías de información">
      {CATEGORIES.map(({ key, icon, label }) => (
        <button
          key={key}
          data-category={key}
          aria-label={`Ver ${label}`}
          className={`icon-btn${activeCategory === key ? ' active' : ''}`}
          onClick={() => onCategoryClick(key)}
        >
          {icon}
        </button>
      ))}
    </nav>
  );
}
