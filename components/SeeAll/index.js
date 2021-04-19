import DataSpotyContext from "../../contexts/dataspotycontext";
import { useContext } from "react";
import style from "./style.module.scss";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import Card from "../../components/Card";
import { useEffect, useState } from "react";

export default function SeeAll() {
  const {
    userRelatedArtists,
    userRecentlyPlayed,
    userShows,
    userAlbums,
    accessToken,
  } = useContext(DataSpotyContext);

  const router = useRouter();
  const idcontainer = router?.query.idcontainer;
  const containerType = idcontainer?.split(/[&]/)[0];
  const artistId = idcontainer?.split(/[&]/)[2];

  const [artistAlbums, setArtistsAlbums] = useState();
  const [relatedArtists, setRelatedArtists] = useState();
  const recentlyPlayed =
    userRecentlyPlayed && userRecentlyPlayed.map((i) => i.track);
  const podcasts = userShows && userShows.map((podcast) => podcast.show);
  const savedAlbums = userAlbums && userAlbums.map((album) => album.album);

  const headers = {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  };

  useEffect(async () => {
    const resArtistAlbums = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/albums`,
      headers
    );
    const artistAlbums = await resArtistAlbums.json();
    setArtistsAlbums(artistAlbums.items);

    const resRelatedArtists = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/related-artists`,
      headers
    );
    const relatedArtists = await resRelatedArtists.json();
    setRelatedArtists(relatedArtists.artists);
  }, []);

  switch (containerType) {
    case "Tus artistas":
      return (
        <div className={style.main_container}>
          <Navbar />
          <div className={style.wrapper}>
            <h1 className={style.title}>{containerType}</h1>
            <div className={style.cards_container}>
              {userRelatedArtists?.map((a, key) => (
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
              {recentlyPlayed?.map((a, key) => (
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
              {podcasts?.map((a, key) => (
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
              {savedAlbums?.map((a, key) => (
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
              {artistAlbums?.map((a, key) => (
                <Card key={key} content={a} cardType={a.type} />
              ))}
            </div>
          </div>
        </div>
      );
      break;
    case "Artistas relacionados":
      return (
        <div className={style.main_container}>
          <Navbar />
          <div className={style.wrapper}>
            <h1 className={style.title}>{containerType}</h1>
            <div className={style.cards_container}>
              {relatedArtists?.map((a, key) => (
                <Card key={key} content={a} cardType={a.type} />
              ))}
            </div>
          </div>
        </div>
      );
      break;
    default:
      return (
        <div className={style.main_container}>
          <Navbar />
          <div className={style.wrapper}>
            <h1 className={style.title}>{containerType}</h1>
            <p>
              KKJJJ ENCONTRASTE UN BUG (?) SI SABES COMO SOLUCIONARLO MANDAME UN
              MENSAJE Y SINO VOLVÉ PARA ATRÁS Y RECARGA LA PÁGINA. MUCHAS
              GRACIAS VUELVA PRONTOS
            </p>
          </div>
        </div>
      );
  }
}
