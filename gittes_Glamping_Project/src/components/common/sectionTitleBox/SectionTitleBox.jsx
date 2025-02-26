import styles from "./sectionTitleBox.module.css";

// Component for displaying a title, aswell as numberOfPersons and price. Used on Activity & ReviewsSection component (only title prop), aswell as Stays component (title, numberOfPersons, price)
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
