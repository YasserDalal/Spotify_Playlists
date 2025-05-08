
export default async function searchTrack(accessToken, song) {
  const query = encodeURIComponent(`${song}`);
  const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });

  const data = await response.json();
  return data.tracks.items
};