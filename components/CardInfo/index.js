import style from "./style.module.scss";
import Navbar from "../Navbar";
import CardsContainer from "../CardsContainer";
import {
  playIcon1,
  fillLikeIcon,
  likeIcon,
  durationIcon,
} from "../../public/icons-svg";

export default function CardInfo({ cardData }) {
  const {
    cardtype,
    infoFollow,
    dataTopTracks,
    data,
    artistAlbums,
    artistRelatedArtists,
  } = cardData;
  const {
    images,
    name,
    album,
    artists,
    publisher,
    id,
    followers,
    duration_ms,
  } = data;
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
          <>
            <section
              style={{ backgroundImage: `url(${images[0]?.url})` }}
              className={style.top_container}
            >
              <Navbar />
              <div className={style.wrapper}>
                <h1 className={style.title}>{name}</h1>
                <p className={style.subtitle}>{followers?.total} seguidores</p>
              </div>
            </section>
            <section className={style.tracks_container}>
              <div className={style.follow_container}>
                <button className={style.play_icon}>{playIcon1}</button>
                <button className={style.follow_button}>
                  {infoFollow ? "SIGUIENDO" : "SEGUIR"}
                </button>
                <h1 className={style.dot_tree}>...</h1>
              </div>
              <div className={style.track_list}>
                <h1 className={style.title}>Popular</h1>
                <ol>
                  {dataTopTracks?.slice(0, 5).map((track, key) => (
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
                <CardsContainer label="Discografía" content={artistAlbums} />
                <CardsContainer
                  label={`Artistas relacionados a ${name}`}
                  content={artistRelatedArtists}
                />
              </div>
            </section>
          </>
        </div>
      );
      break;
    case "tracks":
      return (
        <div className={style.cardInfo__container}>
          <section className={style.top_container}>
            <Navbar />
            <div className={style.wrapper_album}>
              <img
                src={album?.images[1].url}
                className={style.album_img}
                alt=""
              />
              <div className={style.album_info}>
                <p className={style.album_type}>{album?.album_type}</p>
                <h1 className={style.album_title}>{name}</h1>
                <div className={style.album_info__}>
                  {artists?.map((a, key) => (
                    <p className={style.artists} key={key}>
                      {a.name} ·
                    </p>
                  ))}
                  <p>{album?.release_date} ·</p>
                  <p>{album?.total_tracks} Canción ·</p>
                  <p>{convierteMSaMIN(duration_ms)}</p>
                </div>
              </div>
            </div>
          </section>
          <section className={style.tracks_container}>
            <div className={style.info_container}>
              <button className={style.play_icon}>{playIcon1}</button>
              <p className={style.like_icon}>{likeIcon}</p>
              <h1 className={style.dot_tree}>...</h1>
            </div>
            <div className={style.tracks_list}>
              <div className={style.list_head}>
                <div>
                  <p className={style.first_column}>#</p> <p>TÍTULO </p>
                </div>

                <p>{durationIcon}</p>
              </div>
              <hr />
              <div className={style.list_content}>
                <div>
                  <div>
                    <p className={style.first_column}>1</p>
                  </div>

                  <div>
                    <div>
                      <h4>{name}</h4>
                    </div>
                    <div className={style.artists}>
                      {artists?.map((a, key) => (
                        <p>{a.name} ·</p>
                      ))}
                    </div>
                  </div>
                </div>
                <p>{convierteMSaMIN(duration_ms)}</p>
              </div>
            </div>
            {/* <div className={style.albums_container}>
              <CardsContainer label="Más del artista" content={artistAlbums} />
            </div> */}
          </section>
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
      break;
  }
}

// debo crear otro context ? o paso info por props? pensar eso.

//
