
export default function handleNavigateSpotify(userDetails) {
  window.open(userDetails.external_urls.spotify, "_blank");
}