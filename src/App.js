import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./Components/Login";
import { getTokenFromUrl, discoverWeeklyId } from "./utils/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player";
import { useStateProviderValue } from "./store";
import jsonData from "./utils/data.json";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateProviderValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token || token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        _token,
      });
      spotify.setAccessToken(_token);

      // For using pre-loaded data
      dispatch({
        type: "SET_USER",
        user: jsonData.user,
      });

      dispatch({
        type: "SET_PLAYLISTS",
        playlists: jsonData.playlists,
      });

      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: jsonData.discover_weekly,
      });
    }

    // For getting real-time data from spotify apis comment the above code and uncomment the below one


    /* For getting user profile */
    
    // spotify.getMe().then((user) => {
    //   dispatch({
    //     type: "SET_USER",
    //     user: user,
    //   });
    // });

    /* For getting user playlists */

    // spotify.getUserPlaylists().then((playlists) => {
    //   dispatch({
    //     type: "SET_PLAYLISTS",
    //     playlists: playlists,
    //   });
    // });

    /* For getting discover weekly */

    // spotify.getPlaylist(discoverWeeklyId).then((response) => {
    //   dispatch({
    //     type: "SET_DISCOVER_WEEKLY",
    //     discover_weekly: response,
    //   });
    // });
  }, []);

  // console.log(token);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
      {/* Spotify Login */}
    </div>
  );
}

export default App;
