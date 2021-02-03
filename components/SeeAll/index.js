import DataSpotyContext from "../../contexts/dataspotycontext";
import { useContext } from "react";
import style from "../Main/style.module.scss";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import Card from "../../components/Card";

export default function SeeAll() {
  const {
    userRelatedArtists,
    userRecentlyPlayed,
    userShows,
    userAlbums,
  } = useContext(DataSpotyContext);

  const router = useRouter();
  const { idcontainer } = router.query;
  const [containerType] = idcontainer.split(/[&]/);
  const recentlyPlayed =
    userRecentlyPlayed && userRecentlyPlayed.map((i) => i.track);
  const podcasts = userShows && userShows.map((podcast) => podcast.show);
  const savedAlbums = userAlbums && userAlbums.map((album) => album.album);

  switch (containerType) {
    case "Artistas relacionados":
      return (
        <div className={style.main_container}>
          <Navbar />
          <div className={style.wrapper}>
            <h1 className={style.title}>{containerType}</h1>
            <div className={style.cards_container}>
              {userRelatedArtists.map((a, key) => (
                <Card key={key} content={a} cardType={a.type} />
              ))}
            </div>
          </div>
        </div>
      );
      break;
    case "Escuchados recientemente":
      return (
        <div className={style.main_container}>
          <Navbar />
          <div className={style.wrapper}>
            <h1 className={style.title}>{containerType}</h1>
            <div className={style.cards_container}>
              {recentlyPlayed.map((a, key) => (
                <Card key={key} content={a} cardType={a.type} />
              ))}
            </div>
          </div>
        </div>
      );
      break;
    case "Podcasts":
      return (
        <div className={style.main_container}>
          <Navbar />
          <div className={style.wrapper}>
            <h1 className={style.title}>{containerType}</h1>
            <div className={style.cards_container}>
              {podcasts.map((a, key) => (
                <Card key={key} content={a} cardType={a.type} />
              ))}
            </div>
          </div>
        </div>
      );
      break;
    case "Albums guardados":
      return (
        <div className={style.main_container}>
          <Navbar />
          <div className={style.wrapper}>
            <h1 className={style.title}>{containerType}</h1>
            <div className={style.cards_container}>
              {savedAlbums.map((a, key) => (
                <Card key={key} content={a} cardType={a.type} />
              ))}
            </div>
          </div>
        </div>
      );
      break;
    case "Discografía":
      return (
        <div className={style.main_container}>
          <Navbar />
          <div className={style.wrapper}>
            <h1 className={style.title}>{containerType}</h1>
            <div className={style.cards_container}>
              {userRelatedArtists.map((a, key) => (
                <Card key={key} content={a} cardType={a.type} />
              ))}
            </div>
          </div>
        </div>
      );
      break;
    default:
      break;
  }
}
