import Head from "next/head";
import MainArtist from "../MainArtist";
import MainTrack from "../MainTrack";
import MainShow from "../MainShow";
import MainAlbum from "../MainAlbum";

export default function CardInfo({ cardData }) {
  const { cardtype } = cardData;

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
        <>
          <Head>
            <title>Artista || Musikit</title>
          </Head>
          <MainArtist cardData={cardData} convierteMSaMIN={convierteMSaMIN} />
        </>
      );
      break;
    case "tracks":
      return (
        <>
          <Head>
            <title>Track || Musikit</title>
          </Head>
          <MainTrack cardData={cardData} convierteMSaMIN={convierteMSaMIN} />
        </>
      );
      break;
    case "shows":
      return (
        <>
          <Head>
            <title>Podcast || Musikit</title>
          </Head>
          <MainShow cardData={cardData} convierteMSaMIN={convierteMSaMIN} />
        </>
      );
      break;
    case "albums":
      return (
        <>
          <Head>
            <title>Album || Musikit</title>
          </Head>
          <MainAlbum cardData={cardData} convierteMSaMIN={convierteMSaMIN} />
        </>
      );
      break;

    default:
      break;
  }
}

// debo crear otro context ? o paso info por props? pensar eso.

//
