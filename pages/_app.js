import "../styles/globals.css";
import { useRouter } from "next/router";
import { DataSpotyProvider } from "../contexts/dataspotycontext";
import { useFetch } from "../hooks/usefetch";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [, accessToken] = router.asPath.split(/[=&]/);
  const userDataApi = "https://api.spotify.com/v1/me/";
  const userPlaylistApi = "https://api.spotify.com/v1/me/playlists";
  const userArtistsApi = "https://api.spotify.com/v1/me/top/artists";
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
  const userArtists = useFetch(userArtistsApi, headers);
  const userRecentlyPlayed = useFetch(userRecentlyPlayedApi, headers);
  const userShows = useFetch(userShowsApi, headers);
  const userAlbums = useFetch(userAlbumsApi, headers);

  //CONTEXT PROVIDER
  const infoToProvider = {
    userData: userData.response,
    userPlaylists: userPlaylists.response.items,
    userRelatedArtists: userArtists.response.items,
    userRecentlyPlayed: userRecentlyPlayed.response.items,
    userShows: userShows.response.items,
    userAlbums: userAlbums.response.items,
    headers: headers,
    accessToken: accessToken,
  };

  return (
    <DataSpotyProvider value={infoToProvider}>
      <Component {...pageProps} />
    </DataSpotyProvider>
  );
}
