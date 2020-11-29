import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DataSpotyProvider } from "../../contexts/dataspotycontext.js";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main";
import style from "./style.module.scss";

export default function Dashboard() {
  const router = useRouter();
  // VARIABLES
  const [, accessToken] = router.asPath.split(/[=&]/);
  const userDataApi = "https://api.spotify.com/v1/me/";
  const userPlaylistApi = "https://api.spotify.com/v1/me/playlists";
  const userRelatedArtistsApi = "https://api.spotify.com/v1/me/top/artists";
  const userRecentlyPlayedApi =
    "https://api.spotify.com/v1/me/player/recently-played";
  // STATES
  const [userData, setUserData] = useState({});
  const [userPlaylists, setUserPlaylists] = useState({});
  const [userRelatedArtists, setUserRelatedArtists] = useState({});
  const [userRecentlyPlayed, setUserRecentlyPlayed] = useState({});

  useEffect(() => {
    fetchData(userRelatedArtistsApi, setUserRelatedArtists);
    fetchData(userDataApi, setUserData);
    fetchData(userPlaylistApi, setUserPlaylists);
    fetchData(userRecentlyPlayedApi, setUserRecentlyPlayed);
  }, []);

  async function fetchData(url, setter) {
    const data = await fetch(url, {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
    const dataJson = await data.json();
    setter(dataJson);
    return dataJson;
  }

  const infoToProvider = {
    userData,
    userPlaylists,
    userRelatedArtists,
    userRecentlyPlayed,
  };

  return (
    <DataSpotyProvider value={infoToProvider}>
      <div className={style.dashboard_container}>
        <section className={style.sidebar}>
          <Sidebar userPlaylists={userPlaylists} />
        </section>
        <section className={style.main}>
          <Main />
        </section>
      </div>
    </DataSpotyProvider>
  );
}
