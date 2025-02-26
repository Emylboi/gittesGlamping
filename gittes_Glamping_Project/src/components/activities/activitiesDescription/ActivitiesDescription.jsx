import { useState } from "react";
import styles from "./activitiesDescription.module.css";

// This component shows the description of the activities. 
// We get date, time and description as props, which are passed from the Activity component.
const ActivitiesDescription = ({ date, time, description }) => {

  // State to track accordion open/close
  const [isOpen, setIsOpen] = useState(false); 

  // Function that toggles the accordion open/close
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
