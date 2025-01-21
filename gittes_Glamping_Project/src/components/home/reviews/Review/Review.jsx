import styles from "./review.module.css";

const Review = ({ name, age, title, review }) => {
  return (
    <div className={styles.review}>
      <div className={styles.content}>
          <h2 className={styles.nameAge}>
            {name}, {age} år
          </h2>
    
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.review}>{review}</p>
      </div>
    </div>
  );
};

export default Review;
