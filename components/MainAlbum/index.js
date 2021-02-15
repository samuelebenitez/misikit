import style from "./style.module.scss";
import Navbar from "../Navbar";
import {
  playIcon1,
  fillLikeIcon,
  likeIcon,
  durationIcon,
} from "../../public/icons-svg";

export default function MainAlbum({ cardData, convierteMSaMIN }) {
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
    type,
    release_date,
    total_tracks,
    tracks,
  } = data;

  console.log(data);
  return (
    <div className={style.cardInfo__container}>
      <section className={style.top_container}>
        <Navbar />
        <div className={style.wrapper_album}>
          <img src={images[1].url} className={style.album_img} alt="" />
          <div className={style.album_info}>
            <p className={style.album_type}>{type}</p>
            <h1 className={style.album_title}>{name}</h1>
            <div className={style.album_info__}>
              {artists?.map((a, key) => (
                <p className={style.artists} key={key}>
                  {a.name} ·
                </p>
              ))}
              <p>{release_date} ·</p>
              <p>{total_tracks} Canciones ·</p>
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
            {tracks.items.map((track, key) => (
              <div className={style.track_container}>
                <section>
                  <div>
                    <p className={style.first_column}>{key + 1}</p>
                  </div>

                  <div>
                    <div>
                      <h4>{track.name}</h4>
                    </div>
                    <div className={style.artists}>
                      {track.artists.map((a, key) => (
                        <p>{a.name} ·</p>
                      ))}
                    </div>
                  </div>
                </section>

                <div className={style.duration}>
                  <p>{convierteMSaMIN(track.duration_ms)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
