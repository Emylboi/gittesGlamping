import { useEffect, useRef, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const BoStaysForm = () => {
  const { id } = useParams();
  const formRef = useRef();
  const [stays, addStay, updateStay] = useOutletContext();
  const [editMode, setEditMode] = useState(false);
  const [stay, setStay] = useState(
    id ? stays?.filter((p) => p._id === id)[0] : null
  );
  const [image, setImage] = useState();

  useEffect(() => {
    const foundStay = id ? stays.find((p) => p._id === id) : null;
    setStay(foundStay);
    setEditMode(!!id);
    
  }, [id, stays]);

  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("title", stay.title);
    formData.append("description", stay.description);
    formData.append("numberOfPersons", stay.numberOfPersons);
    formData.append("price", stay.price);
    formData.append("includes", stay.includes);
    editMode && formData.append("id", stay?._id)
    image && formData.append("file", image);


    editMode ? updateStay(formData) : addStay(formData);
  };

  return (
    <div>
      <h2>{editMode ? "Redigér Stay" : "Opret Stay"}</h2>
      <form onSubmit={onHandleSubmit} ref={formRef}>
        <label>
        <img src={image ? URL.createObjectURL(image) : "http://localhost:3042/stays/no-image.jpeg"} width={150}></img>
          <input type="file" name={"file"} onChange={onImageChange}></input>
        </label>
        <label>
          {" "}
          Title
          <input
            type="text"
            value={stay?.title || ""}
            onChange={(e) => setStay({ ...stay, title: e.target.value })}
          ></input>
        </label>
        <label>
          {" "}
          Description
          <input
            type="text"
            value={stay?.description || ""}
            onChange={(e) => setStay({ ...stay, description: e.target.value })}
          ></input>
        </label>
        <label>
          {" "}
          Number of Persons
          <input
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
            type="text"
            value={stay?.price || ""}
            onChange={(e) => setStay({ ...stay, price: e.target.value })}
          ></input>
        </label>
        <label>
          {" "}
          Includes
          <input
            type="text"
            value={stay?.includes || ""}
            onChange={(e) => setStay({ ...stay, includes: e.target.value })}
          ></input>
        </label>
        <button>{editMode ? "Redigér Stay" : "Opret Stay"}</button>{" "}
        <button type="reset">RESET</button>
      </form>
    </div>
  );
};
export default BoStaysForm;
