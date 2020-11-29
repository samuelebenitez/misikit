import style from "./style.module.scss";
import Card from "../Card";

export default function CardsContainer({ label, content }) {
  return (
    <div className={style.container}>
      <div className={style.title_}>
        <h1 className={style.title}>{label}</h1>
      </div>
      <div className={style.cards_container}>
        {content &&
          content.slice(0, 5).map((i) => <Card key={i.id} content={i} />)}
      </div>
    </div>
  );
}
