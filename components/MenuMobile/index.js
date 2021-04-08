import style from "./style.module.scss";
import {
  likeIcon,
  playIcon,
  homeIcon,
  searchIcon,
  libraryIcon,
} from "../../public/icons-svg";

export default function MenuMobile() {
  return (
    <div className={style.menu_mobile_container}>
      <div className={style.player}>
        <div className={style.like_icon}>{likeIcon}</div>
        <div className={style.song_info}>
          <p className={style.song_name}>el origen ·</p>
          <div className={style.song_artist}>acru</div>
        </div>
        <div className={style.play_icon}>{playIcon}</div>
      </div>
      <div className={style.menu}>
        <div className={style.home}>{homeIcon} Inicio</div>
        <div className={style.search}>{searchIcon} Buscar</div>
        <div className={style.library}>{libraryIcon} Tu biblioteca</div>
      </div>
    </div>
  );
}
