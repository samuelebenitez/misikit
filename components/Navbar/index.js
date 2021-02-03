import style from "./style.module.scss";
import UserToggle from "../userToggle";
import { useState, useContext } from "react";
import {
  downArrowIcon,
  upArrowIcon,
  leftArrowIcon,
  rightArrowIcon,
} from "../../public/icons-svg.js";
import DataSpotyContext from "../../contexts/dataspotycontext.js";
import { useRouter } from "next/router";

export default function Navbar({ pos }) {
  const router = useRouter();
  const { userData } = useContext(DataSpotyContext);
  const [showUserToggle, setShowUserToggle] = useState(false);
  const { display_name, images } = userData;

  function handleToggle() {
    setShowUserToggle((prevState) => !prevState);
  }

  return (
    <nav
      className={style.nav_container}
      // style={{
      //   backgroundColor:
      //     pos === "top" ? " rgba(18, 18, 18, 0)" : "rgba(18, 18, 18, 1)",
      // }}
    >
      <div className={style.nav_container_items}>
        <div className={style.nav_container_items_buttons}>
          <button onClick={() => router.back()} className={style.button}>
            {leftArrowIcon}
          </button>
          <button className={style.button}>{rightArrowIcon}</button>
        </div>
        <div className={style.nav_container_items_user}>
          {images &&
            images.map((i, key) => (
              <img
                className={style.items_user_pic}
                key={key}
                src={i.url}
                alt=""
              />
            ))}
          <p className={style.items_user_name}>
            {display_name && display_name}
          </p>
          <span onClick={handleToggle} className={style.items_user_arrow}>
            {showUserToggle ? upArrowIcon : downArrowIcon}
          </span>
        </div>
      </div>
      {showUserToggle ? (
        <div className={style.nav_container_toggle}>
          <UserToggle />
        </div>
      ) : null}
    </nav>
  );
}
