import { useEffect, useRef, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import styles from "../../boForm.module.css";

const BoReviewsForm = () => {
  const { id } = useParams(); /* We get the id from the URL */
  const formRef = useRef(); /* We reference to the form */
  const [reviews, addReview, updateReview] = useOutletContext();
  const [editMode, setEditMode] =
    useState(
      false
    ); /* determines whether we're in editmode or 'createmode' of a review   */
  const [review, setReview] = useState(
    /* This state holds the current state being edited or created */
    id
      ? reviews?.filter((p) => p._id === id)[0]
      : null /* finds the review if an ID is provided */
  );
  const [image, setImage] = useState(); /* Holds the image file */

  useEffect(() => {
    const foundReview = id ? reviews.find((p) => p._id === id) : null;
    setReview(foundReview);
    setEditMode(!!id);
  }, [id, reviews]);

  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  /* Handle form submission */
  const onHandleSubmit = (e) => {
    e.preventDefault();

    /* Creates formData object to send data */
    let formData = new FormData();
    formData.append("name", review.name);
    formData.append("age", review.age);
    formData.append("review", review.review);
    editMode && formData.append("id", review?._id);

    editMode ? updateReview(formData) : addReview(formData);
  };

  return (
    <div className={styles.content}>
      <h2>{editMode ? "Redigér Review" : "Opret Review"}</h2>
      <form onSubmit={onHandleSubmit} ref={formRef} className={styles.form}>
        <label>
          {" "}
          Name
          <input
            className={styles.input}
            type="text"
            value={review?.name || ""}
            onChange={(e) => setReview({ ...review, name: e.target.value })}
          ></input>
        </label>
        <label>
          {" "}
          Age
          <input
            className={styles.input}
            type="text"
            value={review?.age || ""}
            onChange={(e) => setReview({ ...review, age: e.target.value })}
          ></input>
        </label>
        <label>
          {" "}
          Review
          <input
            className={styles.input}
            type="text"
            value={review?.review || ""}
            onChange={(e) => setReview({ ...review, review: e.target.value })}
          ></input>
        </label>
        <div className={styles.buttons}>
          <button className={styles.button}>
            {editMode ? "Redigér Review" : "Opret Review"}
          </button>{" "}
          <button className={styles.button} type="reset">
            RESET
          </button>
        </div>
      </form>
    </div>
  );
};
export default BoReviewsForm;
