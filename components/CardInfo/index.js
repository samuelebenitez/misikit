import style from "./style.module.scss";
import Navbar from "../Navbar";
import CardsContainer from "../CardsContainer";
import { playIcon1 } from "../../public/icons-svg";
import { useRouter } from "next/router";

export default function CardInfo(props) {
  const router = useRouter();
  const [, halfToken] = router.asPath.split(/[=&]/);
  const [accessToken] = halfToken.split(/[.]/);
  const { cardData } = props;
  const {
    cardtype,
    infoFollow,
    dataTopTracks,
    data,
    artistAlbums,
    artistRelatedArtists,
  } = cardData;
  const { images, name, album, artists, publisher, id, followers } = data;
  const [follow] = infoFollow;
  // 0NhXCoKVynm5F7DgXSfqxv

  //Funcion para pasar milisegundos a segundos (la API de spoty trae
  //la duración de los track en milisgundos)
  function convierteMSaMIN(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }
  switch (cardtype) {
    case "artists":
      return (
        <div className={style.cardInfo__container}>
          {cardData ? (
            <>
              <section
                style={{ backgroundImage: `url(${images[0].url})` }}
                className={style.top_container}
              >
                <Navbar />
                <div className={style.wrapper}>
                  <h1 className={style.title}>{name}</h1>
                  <p className={style.subtitle}>{followers.total} seguidores</p>
                </div>
              </section>
              <section className={style.tracks_container}>
                <div className={style.follow_container}>
                  <button className={style.play_icon}>{playIcon1}</button>
                  <button className={style.follow_button}>
                    {follow ? "SIGUIENDO" : "SEGUIR"}
                  </button>
                  <h1 className={style.dot_tree}>...</h1>
                </div>
                <div className={style.track_list}>
                  <h1 className={style.title}>Popular</h1>
                  <ol>
                    {dataTopTracks.slice(0, 5).map((track, key) => (
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
                  />
                  <CardsContainer
                    label={`Artistas relacionados a ${name}`}
                    content={artistRelatedArtists}
                    accessToken={accessToken}
                  />
                </div>
              </section>
            </>
          ) : (
            <p>Is loading mi rey</p>
          )}
        </div>
      );
      break;
    case "tracks":
      return (
        <div className={style.main_container}>
          <Navbar />
        </div>
      );
      break;
    case "shows":
      return (
        <>
          <div
            style={{ backgroundImage: `url(${images[0].url})` }}
            className={style.main_container}
          >
            <Navbar />
            <div className={style.wrapper}>
              <h1 className={style.title}>{name}</h1>
              <p className={style.subtitle}>{followers.total} seguidores</p>
            </div>
          </div>
        </>
      );
      break;
    case "albums":
      return (
        <div className={style.main_container}>
          <Navbar />
        </div>
      );
      break;

    default:
      return <p>Is Loading</p>;
  }
}

// debo crear otro context ? o paso info por props? pensar eso.

//
