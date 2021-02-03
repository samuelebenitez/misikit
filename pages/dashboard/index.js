import Sidebar from "../../components/Sidebar";
import Player from "../../components/Player";
import Main from "../../components/Main";
import style from "./style.module.scss";

export default function Dashboard() {
  return (
    <div className={style.dashboard_container}>
      <div className={style.dashboard}>
        <section className={style.sidebar}>
          <Sidebar />
        </section>
        <section className={style.main}>
          <Main />
        </section>
      </div>
      <div className={style.player_container}>
        <section className={style.player}>
          <Player />
        </section>
      </div>
    </div>
  );
}
