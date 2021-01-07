import style from "../dashboard/style.module.scss";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main";
import Player from "../../components/Player";

export default function cardsComplete() {
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
