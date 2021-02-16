import style from "./style.module.scss";
import Navbar from "../Navbar";
import CardsContainer from "../CardsContainer";
import {
  playIcon1,
  fillLikeIcon,
  likeIcon,
  durationIcon,
} from "../../public/icons-svg";

import { useContext } from "react";
import DataSpotyContext from "../../contexts/dataspotycontext.js";

export default function MainArtist({ cardData, convierteMSaMIN }) {
  const { accessToken } = useContext(DataSpotyContext);

  const {
    infoFollow,
    dataTopTracks,
    data,
    artistAlbums,
    artistRelatedArtists,
  } = cardData;
  const { images, name, followers, id } = data;

  return (
    <div className={style.cardInfo__container}>
      <>
        <section
          style={{ backgroundImage: `url(${images[0]?.url})` }}
          className={style.top_container}
        >
          <Navbar />
          <div className={style.wrapper}>
            <h1 className={style.title}>{name}</h1>
            <p className={style.subtitle}>{followers?.total} seguidores</p>
          </div>
        </section>
        <section className={style.tracks_container}>
          <div className={style.follow_container}>
            <button className={style.play_icon}>{playIcon1}</button>
            <button className={style.follow_button}>
              {infoFollow ? "SIGUIENDO" : "SEGUIR"}
            </button>
            <h1 className={style.dot_tree}>...</h1>
          </div>
          <div className={style.track_list}>
            <h1 className={style.title}>Popular</h1>
            <ol>
              {dataTopTracks?.slice(0, 5).map((track, key) => (
                <li key={key}>
                  <p className={style.track_number}>{key + 1}</p>
                  <img
                    className={style.track_img}
                    src={track.album.images[0].url}
                    alt=""
                  />
                  <p className={style.track_name}>{track.name}</p>

                  <p className={style.track_duration}>
                    {convierteMSaMIN(track.duration_ms)}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div className={style.albums_container}>
            <CardsContainer
              label="Discografía"
              content={artistAlbums}
              accessToken={accessToken}
              artistId={id}
            />
            <CardsContainer
              label={`Artistas relacionados`}
              content={artistRelatedArtists}
              accessToken={accessToken}
              artistId={id}
            />
          </div>
        </section>
      </>
    </div>
  );
}
