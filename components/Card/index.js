import style from "./style.module.scss";
import { playIcon } from "../../public/icons-svg.js";

export default function Card({ content, cardType }) {
  const { images, name, album, artists, publisher } = content;

  switch (cardType) {
    case "artist":
      return (
        <div className={style.card_container}>
          <div
            className={style.card_img}
            style={{
              backgroundImage: `url(${images[1].url})`,
              borderRadius: "50%",
            }}
          >
            <div className={style.button_repro}>{playIcon}</div>
          </div>

          <h4 className={style.h4}>{name}</h4>
          <p className={style.p_content}>
            <p className={style.p}>Artista</p>
          </p>
        </div>
      );
      break;
    case "track":
      return (
        <div className={style.card_container}>
          <div
            className={style.card_img}
            style={{
              backgroundImage: `url(${album.images[1].url})`,
              borderRadius: "1.5%",
            }}
          >
            <div className={style.button_repro}>{playIcon}</div>
          </div>

          <h4 className={style.h4}>{name}</h4>
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
    case "show":
      return (
        <div className={style.card_container}>
          <div
            className={style.card_img}
            style={{
              backgroundImage: `url(${images[1].url})`,
              borderRadius: "10%",
            }}
          >
            <div className={style.button_repro}>{playIcon}</div>
          </div>

          <h4 className={style.h4}>{name}</h4>
          <p className={style.p_content}>
            <p className={style.p_podcastInfo}>{publisher}</p>
          </p>
        </div>
      );
      break;
    case "album":
      return (
        <div className={style.card_container}>
          <div
            className={style.card_img}
            style={{
              backgroundImage: `url(${images[1].url})`,
              borderRadius: "1.5%",
            }}
          >
            <div className={style.button_repro}>{playIcon}</div>
          </div>

          <h4 className={style.h4}>{name}</h4>
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
