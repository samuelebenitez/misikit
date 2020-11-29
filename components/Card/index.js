import style from "./style.module.scss";
import { playIcon } from "../../public/icons-svg.js";

export default function Cards({ content }) {
  const { images, name, type } = content;
  return (
    <div className={style.card_container}>
      {images && (
        <div
          className={style.card_img}
          style={{ backgroundImage: `url(${images[1].url})` }}
        >
          <div className={style.button_repro}>{playIcon}</div>
        </div>
      )}
      <h4 className={style.h4}>{name}</h4>
      <p className={style.p}>{type}</p>
    </div>
  );
}
