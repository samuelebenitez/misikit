import React from "react";
import style from "./style.module.scss";
import {
  homeIcon,
  searchIcon,
  libraryIcon,
  createPlaylistIcon,
  spotifyLogo,
} from "../../public/icons-svg.js";
import { useContext } from "react";
import DataSpotyContext from "../../contexts/dataspotycontext";
import { useRouter } from "next/router";

const Sidebar = () => {
  const { userPlaylists, accessToken } = useContext(DataSpotyContext);
  const router = useRouter();
  const baseUrl = `https://accounts.spotify.com/authorize`;
  const clientId = `3e8826969cda44dd9759e854441c1de8`;
  const responseType = `token`;
  const redirectUri = `http://localhost:3000/dashboard`;

  console.log(router);

  // http://localhost:3000/dashboard#access_token=BQBMJgU0hTNSLA_Q4LM5oQX3f2YyNi_OM30iCHir7Aur0DJVjK5QX6eUH6ClTq-GyDiEc9Gcsw36LnCVfwdZI3mEql3xgPb9qCo8kdL4LJH6CwakTpNataSIeBOCcVnWVIzP7IWTt9CL80_0Hz_dt3RofDfLQYjAR_-nyAVStfs&token_type=Bearer&expires_in=3600

  return (
    <section className={style.sidebar_container}>
      <div className={style.sidebar_banner_container}>
        <span
          onClick={() =>
            router.push(
              `${redirectUri}#access_token=${accessToken}&token_type=Bearer&expires_in=3600`
            )
          }
          className={style.banner}
        >
          {spotifyLogo}
        </span>
      </div>

      <ul className={style.sidebar_buttons}>
        <li className={style.li}>
          <span
            onClick={() =>
              router.push(
                `${redirectUri}#access_token=${accessToken}&token_type=Bearer&expires_in=3600`
              )
            }
            className={style.li_icon}
          >
            {homeIcon}
          </span>{" "}
          Inicio
        </li>
        <li className={style.li}>
          <span className={style.li_icon}>{searchIcon}</span> Buscar
        </li>
        <li className={style.li}>
          <span className={style.li_icon}>{libraryIcon}</span> Tu biblioteca
        </li>
      </ul>
      <div className={style.sidebar_playlists_area}>
        <p className={style.sidebar_playlists_area_title}>PLAYLISTS</p>
        <div className={style.sidebar_playlists_area_crear}>
          <span className={style.crear_icon}>
            <span className={style.p}>+</span>
          </span>
          Crear playlist
        </div>
        <div className={style.sidebar_playlists_area_likes}>
          <span className={style.likes_icon}>
            <span className={style.p}>♥</span>
          </span>
          Tus Me Gusta
        </div>
      </div>
      <hr className={style.hr} />
      <div className={style.playlists_list}>
        {userPlaylists &&
          userPlaylists.map((p, key) => (
            <p className={style.list_item} key={key}>
              {p.name}
            </p>
          ))}
      </div>
    </section>
  );
};

export default Sidebar;
