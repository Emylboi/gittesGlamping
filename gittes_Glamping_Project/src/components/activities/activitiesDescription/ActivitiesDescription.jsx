import { useState } from "react";
import styles from "./activitiesDescription.module.css";

const ActivitiesDescription = ({ date, time, description }) => {
  const [isOpen, setIsOpen] = useState(false); // State to track accordion open/close

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.topPart}>
          <div className={styles.timePart}>
            <h2>{date}</h2>
            <h2>kl.{time}</h2>
          </div>
          <div className={styles.favorite}>
            <button className={styles.favoriteButton}>
              <i className="fas fa-heart"></i>
            </button>
          </div>
        </div>

        <div className={styles.bottomPart}>
          <div className={styles.accordion}>
            <button
              onClick={toggleAccordion}
              className={styles.accordionButton}
            >
              {isOpen ? "Hide Details" : "Show Details"}
            </button>
            {isOpen && (
              <p className={styles.accordionContent}>{description}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivitiesDescription;
