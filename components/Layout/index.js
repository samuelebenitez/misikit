import Sidebar from "../Sidebar";
import Player from "../Player";
import MenuMobile from "../MenuMobile";
import style from "./style.module.scss";

export default function Layout({ children }) {
  return (
    <div className={style.dashboard_container}>
      <div className={style.dashboard}>
        <section className={style.sidebar}>
          <Sidebar />
        </section>
        <section className={style.main}>{children}</section>
      </div>
      <div className={style.player_container}>
        <section className={style.player}>
          <Player />
        </section>
        <section className={style.player_mobile}>
          <MenuMobile />
        </section>
      </div>
    </div>
  );
}
