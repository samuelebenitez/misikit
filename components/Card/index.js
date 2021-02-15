import style from "./style.module.scss";
import { useContext } from "react";
import DataSpotyContext from "../../contexts/dataspotycontext.js";
import { playIcon } from "../../public/icons-svg.js";
import Link from "next/link";

export default function Card({ content, cardType }) {
  const { accessToken } = useContext(DataSpotyContext);
  const { images, name, album, artists, publisher, id } = content;

  switch (cardType) {
    case "artist":
      return (
        <div className={style.card_container}>
          <Link href={`/${cardType}s/${id}&${accessToken}`}>
            <div
              className={style.card_img}
              style={{
                backgroundImage: `url(${images[1].url})`,
                borderRadius: "50%",
              }}
            >
              <div className={style.button_repro}>{playIcon}</div>
            </div>
          </Link>

          <Link href={`/${cardType}s/${id}&${accessToken}`}>
            <h4 className={style.h4}>{name}</h4>
          </Link>
          <p className={style.p_content}>
            <p className={style.p}>Artista</p>
          </p>
        </div>
      );
      break;
    case "track":
      return (
        <div className={style.card_container}>
          <Link href={`/${cardType}s/${id}&${accessToken}`}>
            <div
              className={style.card_img}
              style={{
                backgroundImage: `url(${album.images[1].url})`,
                borderRadius: "1.5%",
              }}
            >
              <div className={style.button_repro}>{playIcon}</div>
            </div>
          </Link>

          <Link href={`/${cardType}s/${id}&${accessToken}`}>
            <h4 className={style.h4}>{name}</h4>
          </Link>
          <p className={style.p_content}>
            {artists.slice(0, 2).map((a, key) => (
              <p key={key} className={style.p} title={a.name}>
                {a.name}
              </p>
            ))}
          </p>
        </div>
      );
      break;
    case "show":
      return (
        <div className={style.card_container}>
          <Link href={`/${cardType}s/${id}&${accessToken}`}>
            <div
              className={style.card_img}
              style={{
                backgroundImage: `url(${images[1].url})`,
                borderRadius: "10%",
              }}
            >
              <div className={style.button_repro}>{playIcon}</div>
            </div>
          </Link>

          <Link href={`/${cardType}s/${id}&${accessToken}`}>
            <h4 className={style.h4}>{name}</h4>
          </Link>
          <p className={style.p_content}>
            <p className={style.p_podcastInfo}>{publisher}</p>
          </p>
        </div>
      );
      break;
    case "album":
      return (
        <div className={style.card_container}>
          <Link href={`/${cardType}s/${id}&${accessToken}`}>
            <div
              className={style.card_img}
              style={{
                backgroundImage: `url(${images[1].url})`,
                borderRadius: "1.5%",
              }}
            >
              <div className={style.button_repro}>{playIcon}</div>
            </div>
          </Link>

          <Link href={`/${cardType}s/${id}&${accessToken}`}>
            <h4 className={style.h4}>{name}</h4>
          </Link>
          <p className={style.p_content}>
            {artists.slice(0, 2).map((a, key) => (
              <p key={key} className={style.p}>
                {a.name}
              </p>
            ))}
          </p>
        </div>
      );
      break;

    default:
      break;
  }
}
