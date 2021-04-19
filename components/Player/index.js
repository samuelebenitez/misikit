import style from "./style.module.scss";
import {
  previousSongIcon,
  randomPlay,
  nextSongIcon,
  repeatSongIcon,
  playIcon,
  songLyricsIcon,
  volumeActiveIcon,
} from "../../public/icons-svg.js";

import { useContext } from "react";
import DataSpotyContext from "../../contexts/dataspotycontext";

export default function Player() {
  const { userRecentlyPlayed } = useContext(DataSpotyContext);
  const lastSongPlayed = userRecentlyPlayed && userRecentlyPlayed[0]?.track;

  return (
    <div className={style.player_container}>
      <div className={style.player_left}>
        <div
          style={{
            backgroundImage: `url(${lastSongPlayed?.album.images[2].url})`,
          }}
          className={style.img_container}
        ></div>

        <div className={style.info_current}>
          <p className={style.song_name}>{lastSongPlayed?.name}</p>
          <div className={style.artists_container}>
            {lastSongPlayed?.artists.map((a, key) => (
              <p key={key} className={style.artists}>
                {a.name} ·
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className={style.player_center}>
        <div className={style.player_buttons}>
          {randomPlay}
          {previousSongIcon}
          <button>{playIcon}</button>
          {nextSongIcon}
          {repeatSongIcon}
        </div>
        <div className={style.progress_bar}>
          <progress>Indeterminate</progress>
        </div>
      </div>
      <div className={style.player_right}>
        {songLyricsIcon}
        <div className={style.progress_container}>
          {volumeActiveIcon}
          <progress>Indeterminate</progress>
        </div>
      </div>
    </div>
  );
}
