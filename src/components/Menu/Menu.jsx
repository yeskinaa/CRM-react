import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { User } from "../User/User";
import styles from "./Menu.module.css";

export const Menu = (props) => {
  const menuHandler = () => {
    const menu = document.querySelector('#menu')
    const shadow = document.querySelector('#shadow')
    menu.classList.toggle('active-menu')
    shadow.classList.toggle('active-shadow')
  }
  return (
    <div className={styles.menu} id='menu'>
      <div className={styles.menu__top}>
        <div className={styles.menu__header}>
          <Logo />
          <img
            src="./img/burger.png"
            alt="Burger Menu"
            className={styles.burger}
            id="burger"
            onClick={()=> menuHandler()}
          />
        </div>
        <Navigation />
      </div>
      <User />
    </div>
  );
};
