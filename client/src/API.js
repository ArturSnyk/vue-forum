let API_URL = 'http://localhost:3000/no-current-prod-env/api';
if (window.location.hostname === 'localhost') {
  API_URL = 'http://localhost:3000';
}

export async function isAdmin(){
  const response = await fetch(`${API_URL}/auth/admin`);
  return response.json();
}