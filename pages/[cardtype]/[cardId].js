import CardInfo from "../../components/CardInfo";
import Layout from "../../components/Layout";

export default function cardId(props) {
  return (
    <Layout>
      <CardInfo cardData={props} />
    </Layout>
  );
}

export async function getServerSideProps({ req, params }) {
  const url = req.url;
  const { cardId, cardtype } = params;
  const [realCardId] = cardId.split(/[&]/);
  const [, halfToken] = url.split(/[=&]/);
  const [accessToken] = halfToken.split(/[.]/);
  const headers = {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  };

  // Información del artista/podcast/track/album
  const resInfo = await fetch(
    `https://api.spotify.com/v1/${cardtype}/${realCardId}`,
    headers
  );
  const dataInfo = await resInfo.json();

  // Tracks del artista
  const resTopTracks = await fetch(
    `https://api.spotify.com/v1/artists/${realCardId}/top-tracks?market=es`,
    headers
  );
  const dataTopTracks =
    cardtype == "artists" ? await resTopTracks.json() : null;

  // Información del track
  const resTrackInfo = await fetch(
    `https://api.spotify.com/v1/tracks/${realCardId}`,
    headers
  );
  const dataTrackInfo = await resTrackInfo.json();

  // Información sobre si el usuario sigue al artista;
  const resFollow = await fetch(
    `https://api.spotify.com/v1/me/following/contains?type=artist&ids=${realCardId}`,
    headers
  );
  const infoFollow = await resFollow.json();
  // Albums del artista;
  const resArtistAlbums = await fetch(
    `https://api.spotify.com/v1/artists/${realCardId}/albums`,
    headers
  );
  const artistAlbums = await resArtistAlbums.json();
  // Artistas relacionados ;
  const resRelatedArtists = await fetch(
    `https://api.spotify.com/v1/artists/${realCardId}/related-artists`,
    headers
  );
  const relatedArtists = await resRelatedArtists.json();

  return {
    props: {
      data: dataInfo || null,
      cardtype,
      dataTopTracks: dataTopTracks?.tracks || null,
      infoFollow: infoFollow[0] || null,
      artistAlbums: artistAlbums.items || null,
      artistRelatedArtists: relatedArtists.artists || null,
      dataTrackInfo,
    },
  };
}

// get artist:              https://api.spotify.com/v1/artists/{id};
// get artist top tracks:   https://api.spotify.com/v1/artists/{id}/top-tracks;
// get track:               https://api.spotify.com/v1/tracks/{id};
// get show:                https://api.spotify.com/v1/shows/{id};
// get show episodes:       https://api.spotify.com/v1/shows/{id}/episodes;
// get album: 	            https://api.spotify.com/v1/albums/{id};
// get album tracks:        https://api.spotify.com/v1/albums/{id}/tracks;
// get artist albums:       https://api.spotify.com/v1/artists/{id}/albums;
