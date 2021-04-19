import React from "react";
import style from "./style.module.scss";
import Link from "next/link";
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
  const redirectUriDev = `http://localhost:3000/dashboard`;
  const redirectUriProd = `https://misikit.samuelebenitez.vercel.app/dashboard`;
  const searchUrlDev = `http://localhost:3000/search`;
  const searchUrlProd = `https://misikit.samuelebenitez.vercel.app/search`;

  // http://localhost:3000/dashboard#access_token=BQBMJgU0hTNSLA_Q4LM5oQX3f2YyNi_OM30iCHir7Aur0DJVjK5QX6eUH6ClTq-GyDiEc9Gcsw36LnCVfwdZI3mEql3xgPb9qCo8kdL4LJH6CwakTpNataSIeBOCcVnWVIzP7IWTt9CL80_0Hz_dt3RofDfLQYjAR_-nyAVStfs&token_type=Bearer&expires_in=3600

  return (
    <section className={style.sidebar_container}>
      <Link
        href={`${redirectUriProd}#access_token=${accessToken}&token_type=Bearer&expires_in=3600`}
      >
        <div className={style.sidebar_banner_container}>
          <span className={style.banner}>{spotifyLogo}</span>
        </div>
      </Link>

      <ul className={style.sidebar_buttons}>
        <Link
          href={`${redirectUriProd}#access_token=${accessToken}&token_type=Bearer&expires_in=3600`}
        >
          <li className={style.li}>
            <span className={style.li_icon}>{homeIcon}</span>
            Inicio
          </li>
        </Link>

        <Link
          href={`${searchUrlProd}#access_token=${accessToken}&token_type=Bearer&expires_in=3600`}
        >
          <li className={style.li}>
            <span className={style.li_icon}>{searchIcon}</span> Buscar
          </li>
        </Link>

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
        {userPlaylists?.map((p, key) => (
          <p className={style.list_item} key={key}>
            {p.name}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;
