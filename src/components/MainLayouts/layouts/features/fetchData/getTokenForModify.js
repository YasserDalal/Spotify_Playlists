export default async function getTokenForModify(setToken) {
  const clientId = "225cceb84c1e457e944ffc7386865b8c";
  const redirectUri = 'https://revised-girlfriend-same-designed.trycloudflare.com'; // change this if ngrok changes
  const scopes = [
    "playlist-modify-private",
    "playlist-modify-public",
    "ugc-image-upload"
  ];

  const accessToken = localStorage.getItem("accessToken");
  const expiresAt = localStorage.getItem("spotify_token_expires");

  if (accessToken && expiresAt && Date.now() < parseInt(expiresAt)) {
    return accessToken;
  }

  const code = new URLSearchParams(window.location.search).get("code");

  if (code) {
    const codeVerifier = localStorage.getItem("spotify_code_verifier");

    const body = new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: redirectUri,
      client_id: clientId,
      code_verifier: codeVerifier,
    });

    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    });

    const data = await response.json();
    if (data.access_token) {
      localStorage.setItem("accessToken", data.access_token);
      localStorage.setItem("spotify_token_expires", Date.now() + data.expires_in * 1000);
      setToken(data.access_token);
      //window.history.replaceState({}, document.title, "/");
      return data.access_token;
    } else {
      throw new Error("Failed to exchange code for token");
    }
  }

  const codeVerifier = generateRandomString(64);
  const codeChallenge = await generateCodeChallenge(codeVerifier);

  localStorage.setItem("spotify_code_verifier", codeVerifier);

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
