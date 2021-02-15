import style from "./style.module.scss";
import Navbar from "../Navbar";
import CardsContainer from "../CardsContainer";
import MainArtist from "../MainArtist";
import MainTrack from "../MainTrack";
import MainShow from "../MainShow";
import MainAlbum from "../MainAlbum";
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
    description,
    episodes,
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
        <MainArtist cardData={cardData} convierteMSaMIN={convierteMSaMIN} />
      );
      break;
    case "tracks":
      return (
        <MainTrack cardData={cardData} convierteMSaMIN={convierteMSaMIN} />
      );
      break;
    case "shows":
      return <MainShow cardData={cardData} convierteMSaMIN={convierteMSaMIN} />;
      break;
    case "albums":
      return (
        <MainAlbum cardData={cardData} convierteMSaMIN={convierteMSaMIN} />
      );
      break;

    default:
      break;
  }
}

// debo crear otro context ? o paso info por props? pensar eso.

//
