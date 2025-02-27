import { useEffect, useState } from "react";
import useTinyFetch from "../../../../hooks/tinyFetch.hook";
import styles from "./review.module.css";

const Review = ({ review }) => {
  return (
    <div className={styles.review}>
      <div className={styles.content}>
        <h2 className={styles.nameAge}>
          {review.name}, {review.age} år
        </h2>
        <p className={styles.review}>{review.review}</p>
      </div>
    </div>
  );
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { data, fetchData, loading, error, noDataMessage } = useTinyFetch();

  useEffect(() => {
    fetchData("/reviews");
  }, []);

  useEffect(() => {
    setReviews(data);
  }, [data]);

  return (
    <div className={styles.reviews}>
      {loading && <p>Loading reviews...</p>}
      {noDataMessage && <p>{noDataMessage}</p>}
      {reviews?.length === 0 && !loading && !error && (
        <p>No reviews found at the moment. Please try again later.</p>
      )}

      {reviews.map((review) => (
        <Review key={review._id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
