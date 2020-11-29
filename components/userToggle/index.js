import style from "./style.module.scss";

export default function UserToggle() {
  return (
    <div className={style.toggle_container}>
      <p className={style.toggle_button}>Cuenta</p>
      <p className={style.toggle_button}>Perfil</p>
      <div className={style.hr}></div>
      <p className={style.toggle_button}>Cerrar sesión</p>
    </div>
  );
}
