import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.socials}>
          <img src="" alt="" /> {/* Facebook */}
          <img src="" alt="" /> {/* Instagram */}
        </div>
        <div className={styles.logoTitle}>
          <img src="" alt="" /> {/* Logo */}
          <h1 className={styles.title}>Gittes Glamping</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
