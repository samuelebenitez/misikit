import { useRouter } from "next/router";
import { DataSpotyProvider } from "../../contexts/dataspotycontext.js";
import { useFetch } from "../../hooks/usefetch.js";
import Sidebar from "../../components/Sidebar";
import Player from "../../components/Player";
import Main from "../../components/Main";
import style from "./style.module.scss";

export default function Dashboard() {
  const router = useRouter();
  // VARIABLES
  const [, accessToken] = router.asPath.split(/[=&]/);
  const userDataApi = "https://api.spotify.com/v1/me/";
  const userPlaylistApi = "https://api.spotify.com/v1/me/playlists";
  const userRelatedArtistsApi = "https://api.spotify.com/v1/me/top/artists";
  const userShowsApi = "https://api.spotify.com/v1/me/shows";
  const userAlbumsApi = "https://api.spotify.com/v1/me/albums";
  const userRecentlyPlayedApi =
    "https://api.spotify.com/v1/me/player/recently-played";
  const headers = {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  };

  // STATES
  const userData = useFetch(userDataApi, headers);
  const userPlaylists = useFetch(userPlaylistApi, headers);
  const userRelatedArtists = useFetch(userRelatedArtistsApi, headers);
  const userRecentlyPlayed = useFetch(userRecentlyPlayedApi, headers);
  const userShows = useFetch(userShowsApi, headers);
  const userAlbums = useFetch(userAlbumsApi, headers);

  //CONTEXT PROVIDER
  const infoToProvider = {
    userData: userData.response,
    userPlaylists: userPlaylists.response.items,
    userRelatedArtists: userRelatedArtists.response.items,
    userRecentlyPlayed: userRecentlyPlayed.response.items,
    userShows: userShows.response.items,
    userAlbums: userAlbums.response.items,
  };

  return (
    <DataSpotyProvider value={infoToProvider}>
      <div className={style.dashboard_container}>
        <div className={style.dashboard}>
          <section className={style.sidebar}>
            <Sidebar userPlaylists={userPlaylists.response} />
          </section>
          <section className={style.main}>
            <Main />
          </section>
        </div>
        <div className={style.player_container}>
          <section className={style.player}>
            <Player />
          </section>
        </div>
      </div>
    </DataSpotyProvider>
  );
}
