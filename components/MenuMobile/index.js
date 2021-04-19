import style from "./style.module.scss";
import {
  likeIcon,
  playIcon,
  homeIcon,
  searchIcon,
  libraryIcon,
} from "../../public/icons-svg";
import { useRouter } from "next/router";
import { useContext } from "react";
import DataSpotyContext from "../../contexts/dataspotycontext";
import Link from "next/link";

export default function MenuMobile() {
  const router = useRouter();
  const { userRecentlyPlayed, accessToken } = useContext(DataSpotyContext);
  const lastSongPlayed = userRecentlyPlayed && userRecentlyPlayed[0]?.track;

  const redirectUriDev = `http://localhost:3000/dashboard`;
  const redirectUriProd = `https://misikit.samuelebenitez.vercel.app/dashboard`;

  const searchUrlDev = `http://localhost:3000/search`;
  const searchUrlProd = `https://misikit.samuelebenitez.vercel.app/search`;

  return (
    <div className={style.menu_mobile_container}>
      <div className={style.player}>
        <div className={style.like_icon}>{likeIcon}</div>
        <div className={style.song_info}>
          <p className={style.song_name}>{lastSongPlayed?.name} </p>
          <p>-</p>
          <div className={style.song_artist}>
            {lastSongPlayed?.artists.map((a, key) => (
              <p key={key} className={style.artists}>
                {a.name} ·
              </p>
            ))}
          </div>
        </div>
        <div className={style.play_icon}>{playIcon}</div>
      </div>
      <div className={style.menu}>
        <Link
          href={`${redirectUriProd}#access_token=${accessToken}&token_type=Bearer&expires_in=3600`}
        >
          <div className={style.home}>{homeIcon} Inicio</div>
        </Link>
        <Link
          href={`${searchUrlProd}#access_token=${accessToken}&token_type=Bearer&expires_in=3600`}
        >
          <div className={style.search}>{searchIcon} Buscar</div>
        </Link>
        <div className={style.library}>{libraryIcon} Tu biblioteca</div>
      </div>
    </div>
  );
}
