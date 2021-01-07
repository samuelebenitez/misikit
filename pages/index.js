import Head from "next/head";
import style from "../styles/Home.module.scss";

export default function Home() {
  const baseUrl = `https://accounts.spotify.com/authorize`;
  const clientId = `3e8826969cda44dd9759e854441c1de8`;
  const responseType = `token`;
  const redirectUri = `http://localhost:3000/dashboard`;

  return (
    <div className={style.login_container}>
      <button className={style.login_button}>
        <a
          className={style.login_link}
          href={`${baseUrl}?client_id=${clientId}&scope=user-top-read user-read-recently-played user-library-read&response_type=${responseType}&redirect_uri=${redirectUri}`}
        >
          Touch me for login!
        </a>
      </button>
    </div>
  );
}
