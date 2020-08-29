// Reference
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUrl = "http://localhost:3000";

// Spotify application client ID
const clientId = "<CLIENT_ID>";

// Follow the below link for checking out the scopes
// Reference https://developer.spotify.com/documentation/general/guides/scopes/
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// Open your spotify discover weekly and copy the ID from the url 
// Reference https://open.spotify.com/playlist/<DISCOVER_WEEKLY_ID>
export const discoverWeeklyId = '<DISCOVER_WEEKLY_ID>'

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((intial, curr) => {
      let parts = curr.split("=");
      intial[parts[0]] = decodeURIComponent(parts[1]);

      return intial;
    }, {});
};

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
  " "
)}&response_type=token&show_dialog=true`;
