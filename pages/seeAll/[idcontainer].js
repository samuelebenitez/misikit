import style from "../dashboard/style.module.scss";
import Sidebar from "../../components/Sidebar";
import Player from "../../components/Player";
import SeeAll from "../../components/SeeAll";

export default function seeAll() {
  return (
    <div className={style.dashboard_container}>
      <div className={style.dashboard}>
        <section className={style.sidebar}>
          <Sidebar />
        </section>
        <section className={style.main}>
          <SeeAll />
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
