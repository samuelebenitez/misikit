import style from "./style.module.scss";
import Card from "../Card";
import Link from "next/link";

export default function CardsContainer({
  label,
  content,
  accessToken,
  artistId,
}) {
  return (
    <div className={style.container}>
      <div className={style.title_}>
        <Link href={`/seeAll/${label}&${accessToken}&${artistId}`}>
          <h1 className={style.title}>{label}</h1>
        </Link>

        <Link href={`/seeAll/${label}&${accessToken}&${artistId}`}>
          <p className={style.subtitle}>VER TODO</p>
        </Link>
      </div>
      <div className={style.cards_container}>
        {content?.slice(0, 5).map((i, key) => (
          <Card key={key} content={i} cardType={i.type} />
        ))}
      </div>
      <div className={style.cards_container_responsive}>
        {content?.slice(0, 10).map((i, key) => (
          <Card key={key} content={i} cardType={i.type} />
        ))}
      </div>
    </div>
  );
}
