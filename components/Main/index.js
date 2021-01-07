import Navbar from "../Navbar";
import style from "./style.module.scss";
import CardsContainer from "../CardsContainer";
import { useContext } from "react";
import DataSpotyContext from "../../contexts/dataspotycontext.js";
import { useState, useEffect } from "react";

export default function Main() {
  const {
    userRelatedArtists,
    userRecentlyPlayed,
    userShows,
    userAlbums,
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
          label="Artistas relacionados"
          content={userRelatedArtists}
        />
        <CardsContainer
          label="Escuchados recientemente"
          content={recentlyPlayed}
        />
        <CardsContainer label="Tus podcast" content={podcasts} />
        <CardsContainer label="Albums guardados" content={savedAlbums} />
      </div>
    </div>
  );
}
