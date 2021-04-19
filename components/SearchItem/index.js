import style from "./style.module.scss";
import { ellipsisIcon } from "../../public/icons-svg";
import Link from "next/link";
import { useContext } from "react";
import DataSpotyContext from "../../contexts/dataspotycontext.js";

export default function SearchItem({ item }) {
  const { accessToken } = useContext(DataSpotyContext);
  switch (item.type) {
    case "artist":
      return (
        <Link href={`/${item.type}s/${item.id}&${accessToken}`}>
          <div className={style.search_item}>
            <div className={style.img_item}>
              <img src={item.images[1]?.url} alt="" />
            </div>
            <div className={style.info_item}>
              <div className={style.sub_info_item}>
                <h7>{item.name}</h7>
                <h8>Artista</h8>
              </div>
              <div className={style.dot_tree}>
                <span>{ellipsisIcon}</span>
              </div>
            </div>
          </div>
        </Link>
      );

      break;
    case "track":
      return (
        <Link href={`/${item.type}s/${item.id}&${accessToken}`}>
          <div className={style.search_item}>
            <div className={style.img_item}>
              <img src={item.album.images[1]?.url} alt="" />
            </div>
            <div className={style.info_item}>
              <div className={style.sub_info_item}>
                <h7>{item.name}</h7>
                <h8>Canción · {item.album.artists[0].name}</h8>
              </div>
              <div className={style.dot_tree}>
                <span>{ellipsisIcon}</span>
              </div>
            </div>
          </div>
        </Link>
      );
    case "show":
      return (
        <Link href={`/${item.type}s/${item.id}&${accessToken}`}>
          <div className={style.search_item}>
            <div className={style.img_item}>
              <img src={item.images[1]?.url} alt="" />
            </div>
            <div className={style.info_item}>
              <div className={style.sub_info_item}>
                <h7>{item.name}</h7>
                <h8>Podcast · {item.publisher}</h8>
              </div>
              <div className={style.dot_tree}>
                <span>{ellipsisIcon}</span>
              </div>
            </div>
          </div>
        </Link>
      );
      break;
    case "album":
      return (
        <Link href={`/${item.type}s/${item.id}&${accessToken}`}>
          <div className={style.search_item}>
            <div className={style.img_item}>
              <img src={item.images[1]?.url} alt="" />
            </div>
            <div className={style.info_item}>
              <div className={style.sub_info_item}>
                <h7>{item.name}</h7>
                <h8>Álbum · {item.artists[0].name}</h8>
              </div>
              <div className={style.dot_tree}>
                <span>{ellipsisIcon}</span>
              </div>
            </div>
          </div>
        </Link>
      );
    default:
      break;
  }
}
