import styles from "./sectionDescription.module.css";

const SectionDescription = ({
  title,
  description,
  imageSrc,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className={styles.sectionDescription}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      {imageSrc && <img src={imageSrc} alt={title} className={styles.image} />}
      {buttonText && (
        <button className={styles.button} onClick={onButtonClick}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default SectionDescription;
