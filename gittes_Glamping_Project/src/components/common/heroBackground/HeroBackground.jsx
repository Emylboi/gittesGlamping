import { useNavigate } from "react-router-dom";
import styles from "./heroBackground.module.css";

const HeroBackground = ({ title, button, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/contact`);
  };

  return (
    <div
      className={styles.heroBackground}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {button && (
          <button className={styles.button} onClick={handleClick}>
            {button}
          </button>
        )}
      </div>
    </div>
  );
};

export default HeroBackground;
