import style from "./style.module.scss";
import SearchItem from "../SearchItem";

export default function SearchMain({ handleChange, searchData, showTitle }) {
  const { albums, artists, episodes, shows, tracks } = searchData;

  const $albums = albums?.items || [];
  const $artists = artists?.items || [];
  const $tracks = tracks?.items || [];
  const $shows = shows?.items || [];
  return (
    <section className={style.search_container}>
      {showTitle ? (
        <div className={style.title_container}>
          <h1>¡Hola!</h1>
          <h2>Lánzate a buscar algo que te guste.</h2>
        </div>
      ) : null}
      <div className={style.input_container}>
        <input
          onChange={(e) => handleChange(e.target.value)}
          type="text"
          placeholder="Buscar"
        />
      </div>
      {!showTitle ? (
        <div className={style.search_results}>
          <div className={style.search_item}>
            {$artists?.slice(0, 2).map((item, key) => (
              <SearchItem key={key} item={item} />
            ))}
            {$tracks?.slice(0, 2).map((item, key) => (
              <SearchItem key={key} item={item} />
            ))}
            {$shows?.slice(0, 2).map((item, key) => (
              <SearchItem key={key} item={item} />
            ))}
            {$albums?.slice(0, 2).map((item, key) => (
              <SearchItem key={key} item={item} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
