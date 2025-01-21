import styles from "./sectionTitleBox.module.css";

const SectionTitleBox = ({ title, numberOfPersons, price }) => {
  return (
    <div className={styles.sectionTitleBox}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {numberOfPersons && price && (
          <div className={styles.additionalInfo}>
            <p>Antal personer: {numberOfPersons}</p>
            <p>Pris: {price}kr</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionTitleBox;
