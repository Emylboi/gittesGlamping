import Navigation from "../Navigation/Navigation";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <img src="./logo.png" alt="" className={styles.logo} />
          <Navigation></Navigation>
        </div>
      </div>
    </header>
  );
};

export default Header;
