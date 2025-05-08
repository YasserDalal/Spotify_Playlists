export default async function getToken() {
  const clientId = '225cceb84c1e457e944ffc7386865b8c';
  const clientSecret = '195a1d9df5a94e03971c0a23196f736b';

  const credentials = btoa(`${clientId}:${clientSecret}`);

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${credentials}`
    },
    body: 'grant_type=client_credentials'
  });

  const data = await response.json();
  return data.access_token;
}