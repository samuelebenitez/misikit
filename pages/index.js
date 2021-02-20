import Head from "next/head";
import style from "../styles/Home.module.scss";

export default function Home() {
  const baseUrl = `https://accounts.spotify.com/authorize`;
  const clientId = `3e8826969cda44dd9759e854441c1de8`;
  const responseType = `token`;
  const redirectUriDev = `http:%2F%2Flocalhost:3000%2Fdashboard`;
  const redirectUriProd = "http://misikit.samuelebenitez.vercel.app/dashboard";
  ("https://accounts.spotify.com/es-ES/authorize?client_id=2cdf605804824d54a2aa9167bab2b9c4&redirect_uri=https:%2F%2Fmusikit.natasharios.vercel.app%2Fmusic&response_type=token&scope=user-library-modify user-follow-read playlist-read-private user-read-recently-played streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state user-library-read");

  // https:%2F%2Fmisikit.samuelebenitez.vercel.app/dashboard

  return (
    <div className={style.login_container}>
      <button className={style.login_button}>
        {/* <a
          className={style.login_link}
          href={`${baseUrl}?client_id=${clientId}&scope=user-top-read user-read-recently-played user-library-read user-follow-read&response_type=${responseType}&redirect_uri=${redirectUriDev}`}
        >
          Touch me for login!
        </a> */}

        <a
          className={style.login_link}
          href={`https://accounts.spotify.com/es-ES/authorize?client_id=${clientId}&redirect_uri=https:%2F%2Fmisikit.samuelebenitez.vercel.app%2Fdashboard&response_type=token&scope=user-library-modify user-follow-read playlist-read-private user-read-recently-played streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state user-library-read`}
        >
          Touch me for login!
        </a>
      </button>
    </div>
  );
}
