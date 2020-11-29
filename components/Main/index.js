import Navbar from "../Navbar";
import style from "./style.module.scss";
import CardsContainer from "../CardsContainer";
import { useContext } from "react";
import DataSpotyContext from "../../contexts/dataspotycontext.js";
import { useState, useEffect } from "react";

export default function Main() {
  const { userRelatedArtists, userRecentlyPlayed } = useContext(
    DataSpotyContext
  );
  const { items } = userRelatedArtists;
  const recentlyPlayed = userRecentlyPlayed.items;
  console.log(recentlyPlayed);
  //const recently = recentlyPlayed.map((i) => i.track);

  //const trackImgs = recently.map((i) => i.album.images[0]);

  //console.log(trackImgs);

  return (
    <div className={style.main_container}>
      <Navbar />
      <div className={style.wrapper}>
        <CardsContainer label="Artistas Relacionados" content={items} />
        <CardsContainer
          label="Escuchados Recientemente"
          content={recentlyPlayed}
        />
      </div>
    </div>
  );
}
