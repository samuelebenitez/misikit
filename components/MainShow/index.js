import style from "./style.module.scss";
import Navbar from "../Navbar";
import {
  playIcon1,
  fillLikeIcon,
  likeIcon,
  durationIcon,
} from "../../public/icons-svg";

export default function MainShow({ cardData, convierteMSaMIN }) {
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
    description,
    episodes,
  } = data;

  return (
    <div className={style.cardInfo__container}>
      <section className={style.top_container}>
        <Navbar />
        <div className={style.wrapper_album}>
          <img src={images[0].url} className={style.album_img} alt="" />
          <div className={style.album_info}>
            <p className={style.album_type}>{album?.album_type}</p>
            <h1 className={style.album_title}>{name}</h1>
            <div className={style.album_info__}>Podcast · {description}</div>
          </div>
        </div>
      </section>
      <section className={style.tracks_container}>
        <div className={style.info_container}>
          <button className={style.play_icon}>{playIcon1}</button>
          <button className={style.follow_button}>
            {infoFollow ? "SIGUIENDO" : "SEGUIR"}
          </button>
          <h1 className={style.dot_tree}>...</h1>
        </div>
        <div className={style.episodes_list}>
          <div className={style.title_container}>
            <h1 className={style.title}>Todos los episodios</h1>
          </div>

          <div className={style.list_content}>
            {episodes.items.map((episode, key) => (
              <>
                <hr />
                <div key={key} className={style.episode_container}>
                  <div className={style.episode_img_container}>
                    <img src={episode.images[0].url} alt="" />
                  </div>
                  <div className={style.episode_info_container}>
                    <h1 className={style.episode_info_title}>{episode.name}</h1>
                    <p className={style.episode_info_descrip}>
                      {episode.description}
                    </p>
                    <div className={style.episode_buttons}>
                      <img src={episode.images[0].url} alt="" />
                      <button>{playIcon1}</button>
                      <p>{episode.release_date} </p>
                      <p>·</p>
                      <p>{convierteMSaMIN(episode.duration_ms)}</p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
