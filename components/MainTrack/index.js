import style from "./style.module.scss";
import Navbar from "../Navbar";
import CardsContainer from "../CardsContainer";
import {
  playIcon1,
  fillLikeIcon,
  likeIcon,
  durationIcon,
} from "../../public/icons-svg";

export default function MainTrack({ cardData, convierteMSaMIN }) {
  const { data } = cardData;
  const { name, album, artists, duration_ms } = data;

  return (
    <div className={style.cardInfo__container}>
      <section className={style.top_container}>
        <Navbar />
        <div className={style.wrapper_album}>
          <img src={album?.images[1].url} className={style.album_img} alt="" />
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
}
