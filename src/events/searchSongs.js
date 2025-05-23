import  searchTrack  from '../components/MainLayouts/layouts/features/fetchData/searchTrack';
import  getToken  from '../components/MainLayouts/layouts/features/fetchData/getToken';
import  prioritizeTracks  from '../algorithm/searchAlgorithm';

import saveStorage from '../components/localStorage/saveStorage';

export default async function searchSongs(song, setLoading, setPlaylists) {
  if (!song || song.trim() === '') {
    setPlaylists();
    return;
  }
  setLoading(true);
  setPlaylists();
  const accessToken = await getToken();
  const data = await searchTrack(accessToken, song);

  const sortedData = prioritizeTracks(data, song);

  const preloadImages = sortedData.map((track) => {
    return new Promise((resolve) => {
      const img = new Image();
      const url = track.album.images[1]?.url || track.album.images[0]?.url;
      img.src = url;
      img.onload = resolve;
      img.onerror = resolve; 
    });
  });

  await Promise.all(preloadImages);

  setPlaylists(sortedData);
  setLoading(false);
  saveStorage('playlists', sortedData);
};