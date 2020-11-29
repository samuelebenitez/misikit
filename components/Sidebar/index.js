import React from "react";
import style from "./style.module.scss";
import {
  homeIcon,
  searchIcon,
  libraryIcon,
  createPlaylistIcon,
  spotifyLogo,
} from "../../public/icons-svg.js";

const Sidebar = ({ userPlaylists }) => {
  const { items } = userPlaylists;
  return (
    <section className={style.sidebar_container}>
      <div className={style.sidebar_banner_container}>
        <span className={style.banner}>{spotifyLogo}</span>
      </div>

      <ul className={style.sidebar_buttons}>
        <li className={style.li}>
          <span className={style.li_icon}>{homeIcon}</span> Inicio
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
        {items &&
          items.map((p, key) => (
            <p className={style.list_item} key={key}>
              {p.name}
            </p>
          ))}
      </div>
    </section>
  );
};

export default Sidebar;
