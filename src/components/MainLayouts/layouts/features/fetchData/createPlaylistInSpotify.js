
export default async function createPlayLists(accessToken, userId, tracksUris, setSpotifyAdd, setHasClicked, playlistName) {
  setHasClicked(true);
  // create a title of playlist
  const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: playlistName,
        public: false
      })
    });
  const data = await response.json()
  if (!data) {
      console.log("check the createPlayLists() function because we can't create a new playlists in spotify account")
      return;
  }

  if (!data.id) {
    alert('No Playlist ID found in your spotify account');
    console.log('check the createPlaylists() function there is no value retrieved and console log everything if the id is null or undefined');
    return;
  }

  // add the songs of playlist
  const addTracksRes = await fetch(`https://api.spotify.com/v1/playlists/${data.id}/tracks`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ uris: tracksUris })
  });

  const addTracksText = await addTracksRes.json();
  if (!addTracksRes.ok) {
    throw new Error(`Failed to add tracks: ${addTracksText}`);
  }

  setSpotifyAdd(true);
  window.history.replaceState({}, document.title, "/");
  return data
}