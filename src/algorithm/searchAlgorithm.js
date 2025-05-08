const prioritizeTracks = (tracks, songQuery) => {
  const query = songQuery.toLowerCase();

  return tracks.sort((a, b) => {
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();
    const aArtist = a.artists[0]?.name.toLowerCase();
    const bArtist = b.artists[0]?.name.toLowerCase();

    const aExact = aName === query ? 2 : (aArtist === query ? 1 : 0);
    const bExact = bName === query ? 2 : (bArtist === query ? 1 : 0);

    return bExact - aExact; // higher score comes first
  });
};

export default prioritizeTracks;