
import saveStorage from "@/components/localStorage/saveStorage";

export default async function loginToSpotify(setCodeParam){
  const clientId = "225cceb84c1e457e944ffc7386865b8c";
  const redirectUri = 'https://debate-trackbacks-narrow-lauren.trycloudflare.com'; // change this
  const scopes = [
    "playlist-modify-private",
    "playlist-modify-public",
    "ugc-image-upload"
  ];

  const verifyCode = generateRandomString(128);
  const codeChallenge = await generateCodeChallenge(verifyCode);

  saveStorage("codeVerifier", verifyCode);
  setCodeParam(verifyCode);
  const authParams = new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    redirect_uri: redirectUri,
    scope: scopes.join(" "),
    code_challenge_method: "S256",
    code_challenge: codeChallenge,
    show_dialog: "true"
  });

  window.location = `https://accounts.spotify.com/authorize?${authParams.toString()}`;
}


function generateRandomString(length) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let str = '';
  for (let i = 0; i < length; i++) {
    str += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return str;
}

async function generateCodeChallenge(codeVerifier) {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}