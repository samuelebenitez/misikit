import style from "./style.module.scss";
import {
  previousSongIcon,
  randomPlay,
  nextSongIcon,
  repeatSongIcon,
  playIcon,
} from "../../public/icons-svg.js";

export default function Player() {
  return (
    <div className={style.player_container}>
      {previousSongIcon}
      {randomPlay}
      {nextSongIcon}
      {repeatSongIcon}
      {playIcon}
    </div>
  );
}
