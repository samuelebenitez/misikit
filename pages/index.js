import Head from "next/head";
import style from "../styles/Home.module.scss";

export default function Home() {
  const baseUrl = `https://accounts.spotify.com/authorize`;
  const clientId = `3e8826969cda44dd9759e854441c1de8`;
  const responseType = `token`;
  const redirectUriDev = `http://localhost:3000/dashboard`;
  const redirectUriProd = "https://misikit.samuelebenitez.vercel.app/dashboard";

  // https:%2F%2Fmisikit.samuelebenitez.vercel.app/dashboard

  return (
    <>
      <Head>
        <title>Login || Musikit</title>
      </Head>
      <div className={style.login_container}>
        <button className={style.login_button}>
          <a
            className={style.login_link}
            href={`${baseUrl}?client_id=${clientId}&scope=user-top-read user-read-recently-played user-library-read user-follow-read&response_type=${responseType}&redirect_uri=${redirectUriDev}`}
          >
            Touch me for login!
          </a>

          {/* <a
          className={style.login_link}
          href={`${baseUrl}?client_id=${clientId}&scope=user-top-read user-read-recently-played user-library-read user-follow-read&response_type=${responseType}&redirect_uri=${redirectUriProd}`}
        >
          Touch me for login!
        </a> */}
        </button>
      </div>
    </>
  );
}
