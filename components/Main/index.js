import Navbar from "../Navbar";
import style from "./style.module.scss";
import CardsContainer from "../CardsContainer";
import { useContext } from "react";
import DataSpotyContext from "../../contexts/dataspotycontext.js";

export default function Main() {
  const {
    userRelatedArtists,
    userRecentlyPlayed,
    userShows,
    userAlbums,
    accessToken,
  } = useContext(DataSpotyContext);

  const recentlyPlayed =
    userRecentlyPlayed && userRecentlyPlayed.map((i) => i.track);
  const podcasts = userShows && userShows.map((podcast) => podcast.show);
  const savedAlbums = userAlbums && userAlbums.map((album) => album.album);

  return (
    <div className={style.main_container}>
      <Navbar />
      <div className={style.wrapper}>
        <CardsContainer
          label="Tus artistas"
          content={userRelatedArtists}
          accessToken={accessToken}
        />
        <CardsContainer
          label="Escuchados recientemente"
          content={recentlyPlayed}
          accessToken={accessToken}
        />
        <CardsContainer
          label="Podcasts"
          content={podcasts}
          accessToken={accessToken}
        />
        <CardsContainer
          label="Albums guardados"
          content={savedAlbums}
          accessToken={accessToken}
        />
      </div>
    </div>
  );
}
