import { useEffect, useRef, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import styles from "../../boForm.module.css";

const BoStaysForm = () => {
  const { id } = useParams(); /* We get the id from the URL */
  const formRef = useRef(); /* We reference to the form */
  const [stays, addStay, updateStay] = useOutletContext();
  const [editMode, setEditMode] =
    useState(
      false
    ); /* determines whether we're in editmode or 'createmode' of a stay */
  const [stay, setStay] = useState(
    /* This state holds the current state being edited or created */
    id
      ? stays?.filter((p) => p._id === id)[0]
      : null /* finds the stay if an ID is provided */
  );
  const [image, setImage] = useState(); /* Holds the image file */

  useEffect(() => {
    const foundStay = id ? stays.find((p) => p._id === id) : null;
    setStay(foundStay);
    setEditMode(!!id);
  }, [id, stays]);

  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  /* Handle form submission */
  const onHandleSubmit = (e) => {
    e.preventDefault();

    /* Creates formData object to send data */
    let formData = new FormData();
    formData.append("title", stay.title);
    formData.append("description", stay.description);
    formData.append("numberOfPersons", stay.numberOfPersons);
    formData.append("price", stay.price);
    formData.append("includes", stay.includes);
    editMode && formData.append("id", stay?._id);
    image && formData.append("file", image);

    editMode ? updateStay(formData) : addStay(formData);
  };

  return (
    <div className={styles.content}>
      <h2>{editMode ? "Redigér Stay" : "Opret Stay"}</h2>
      <form onSubmit={onHandleSubmit} ref={formRef} className={styles.form}>
        <label>
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : "http://localhost:3042/stays/no-image.jpeg"
            }
            width={150}
          ></img>
          <input
            className={styles.input}
            type="file"
            name={"file"}
            onChange={onImageChange}
          ></input>
        </label>
        <label>
          {" "}
          Title
          <input
            className={styles.input}
            type="text"
            value={stay?.title || ""}
            onChange={(e) => setStay({ ...stay, title: e.target.value })}
          ></input>
        </label>
        <label>
          {" "}
          Description
          <input
            className={styles.input}
            type="text"
            value={stay?.description || ""}
            onChange={(e) => setStay({ ...stay, description: e.target.value })}
          ></input>
        </label>
        <label>
          {" "}
          Number of Persons
          <input
            className={styles.input}
            type="text"
            value={stay?.numberOfPersons || ""}
            onChange={(e) =>
              setStay({ ...stay, numberOfPersons: e.target.value })
            }
          ></input>
        </label>
        <label>
          {" "}
          Price
          <input
            className={styles.input}
            type="text"
            value={stay?.price || ""}
            onChange={(e) => setStay({ ...stay, price: e.target.value })}
          ></input>
        </label>
        <label>
          {" "}
          Includes
          <input
            className={styles.input}
            type="text"
            value={stay?.includes || ""}
            onChange={(e) => setStay({ ...stay, includes: e.target.value })}
          ></input>
        </label>
        <div className={styles.buttons}>
          <button className={styles.button}>{editMode ? "Redigér Stay" : "Opret Stay"}</button>{" "}
          <button className={styles.button} type="reset">RESET</button>
        </div>
      </form>
    </div>
  );
};
export default BoStaysForm;
