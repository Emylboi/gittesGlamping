import { useEffect, useRef, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const BoActivitiesForm = () => {
  // We get the id from the URL.
  const { id } = useParams();

  // We reference to a form.
  const formRef = useRef();

  // We get the activities, addActivity and updateActivity from the context.
  const [activities, addActivity, updateActivity] = useOutletContext();

  // Determines whether we're in editmode or 'createmode' of an activity. False as default.
  const [editMode, setEditMode] = useState(false);

  // useState for the activity.
  const [activity, setActivity] = useState(
    // If we have an id, we filter the activities and get the first one. Otherwise we set it to null.
    id ? activities?.filter((p) => p._id === id)[0] : null
  );

  // useState for the image, null as default value.
  const [image, setImage] = useState();

  useEffect(() => {
    //If we have an id, we find the activity with that id, otherwise we set it to null.
    const foundActivity = id ? activities.find((p) => p._id === id) : null;

    // We set the activity to the foundActivity.
    setActivity(foundActivity);

    // We set the editMode to true if we have an id, otherwise false.
    setEditMode(!!id);

    // The useEffect only runs when the id or activities change.
  }, [id, activities]);

  // Function that handles the change of the image.
  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Function that handles the submit of the form.
  const onHandleSubmit = (e) => {
    e.preventDefault();

    // We create a new FormData object.
    let formData = new FormData();

    // We append the title, description, date and time to the formData.
    formData.append("title", activity.title);
    formData.append("description", activity.description);
    formData.append("date", activity.date);
    formData.append("time", activity.time);

    // If we're in editMode, we append the id to the formData.
    editMode && formData.append("id", activity?._id);

    // If we have an image, we append the image to the formData.
    image && formData.append("file", image);

    // If we're in editMode, we update the activity, otherwise we add the activity.
    editMode ? updateActivity(formData) : addActivity(formData);
  };

  return (
    <div>
      <h2>{editMode ? "Redigér Activity" : "Opret Activity"}</h2>
      <form onSubmit={onHandleSubmit} ref={formRef}>
        <label>
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : "http://localhost:3042/activities/no-activity.jpg"
            }
            width={150}
          ></img>
          <input type="file" name={"file"} onChange={onImageChange}></input>
        </label>
        <label>
          {" "}
          Title
          <input
            type="text"
            value={activity?.title || ""}
            onChange={(e) =>
              setActivity({ ...activity, title: e.target.value })
            }
          ></input>
        </label>
        <label>
          {" "}
          Description
          <input
            type="text"
            value={activity?.description || ""}
            onChange={(e) =>
              setActivity({ ...activity, description: e.target.value })
            }
          ></input>
        </label>
        <label>
          {" "}
          Date
          <input
            type="text"
            value={activity?.date || ""}
            onChange={(e) => setActivity({ ...activity, date: e.target.value })}
          ></input>
        </label>
        <label>
          {" "}
          Time
          <input
            type="text"
            value={activity?.time || ""}
            onChange={(e) => setActivity({ ...activity, time: e.target.value })}
          ></input>
        </label>
        <button>{editMode ? "Redigér Activity" : "Opret Activity"}</button>{" "}
        <button type="reset">RESET</button>
      </form>
    </div>
  );
};
export default BoActivitiesForm;
