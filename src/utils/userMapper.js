// ============================================================
// Pure transformation utilities
// ============================================================

export function formatDate(isoString) {
  const date  = new Date(isoString);
  const day   = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const year  = date.getUTCFullYear();
  return `${day}/${month}/${year}`;
}

export function buildFullName({ title, first, last }) {
  return `${title}. ${first} ${last}`;
}

export function buildAddress({ street, city, country }) {
  return `${street.number} ${street.name}, ${city}, ${country}`;
}

export function mapApiResponseToUser(apiResponse) {
  if (!apiResponse?.results?.length) {
    throw new Error('Invalid API response: missing or empty results array.');
  }
  const u = apiResponse.results[0];
  return {
    name:     buildFullName(u.name),
    email:    u.email,
    birthday: formatDate(u.dob.date),
    address:  buildAddress(u.location),
    phone:    u.phone,
    password: u.login.password,
    photo:    u.picture.large,
  };
}

export async function fetchRandomUser() {
  const response = await fetch('https://randomuser.me/api/');
  if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
  const data = await response.json();
  return mapApiResponseToUser(data);
}

export const CATEGORIES = [
  { key: 'name',     label: 'nombre',     icon: '👤' },
  { key: 'email',    label: 'email',      icon: '✉️'  },
  { key: 'birthday', label: 'cumpleaños', icon: '🎂' },
  { key: 'address',  label: 'dirección',  icon: '📍' },
  { key: 'phone',    label: 'teléfono',   icon: '📞' },
  { key: 'password', label: 'contraseña', icon: '🔒' },
];

// Demo credentials (no real auth)
export const VALID_USER = 'admin';
export const VALID_PASS = '1234';
