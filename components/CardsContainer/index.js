import style from "./style.module.scss";
import Card from "../Card";
import Link from "next/link";

export default function CardsContainer({ label, content }) {
  return (
    <div className={style.container}>
      <div className={style.title_}>
        <h1 className={style.title}>{label}</h1>

        <Link href={`/cardsComplete/${label}`}>
          <p className={style.subtitle}>VER TODO</p>
        </Link>
      </div>
      <div className={style.cards_container}>
        {content &&
          content
            .slice(0, 5)
            .map((i, key) => <Card key={key} content={i} cardType={i.type} />)}
      </div>
    </div>
  );
}
