// handle song input
export default function handleSongs(e, setSong){
  e.preventDefault();
  setSong(e.target.value);
};