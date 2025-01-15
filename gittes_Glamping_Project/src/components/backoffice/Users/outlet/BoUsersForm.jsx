import { useEffect, useRef, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const BoUsersForm = () => {
  const { id } = useParams();
  const formRef = useRef();
  const [users, addUser, updateUser] = useOutletContext();
  const [editMode, setEditMode] = useState(id ? true : false);
  const [user, setUser] = useState(
    id ? users?.filter((p) => p._id === id)[0] : null
  );
  const [image, setImage] = useState(null);

  useEffect(() => {
    const foundUser = id ? users.find((p) => p._id === id) : null;
    setUser(foundUser);
    setEditMode(!!id);
  }, [id, users]);

  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    /* const {title, price} = e.target.elements */
    /* console.log(user);
    console.log(user._id); */
    let formData = new FormData();
    formData.append("name", user.name);
    user.password && formData.append("password", user.password);
    formData.append("email", user.email);
    formData.append("role", user.role);
    editMode && formData.append("id", user?._id);
    image && formData.append("file", image);
    /* console.log(formData);
    console.log(user.password);
    console.log(user); */

    editMode ? updateUser(formData) : addUser(formData);
  };

  return (
    <div>
      <h2>{editMode ? "Redigér User" : "Opret User"}</h2>
      <form onSubmit={onHandleSubmit} ref={formRef}>
        <label>
          <img src={image ? URL.createObjectURL(image) : "http://localhost:3042/users/no-image.jpeg"} width={150}></img>
          <input type="file" name={"file"} onChange={onImageChange}></input>
        </label>
        <label>
          {" "}
          Name
          <input
            type="text"
            value={user?.name || ""}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          ></input>
        </label>
        <label>
          {" "}
          Password
          <input
            type="text"
            name={"password"}
            value={user?.password || ""}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          ></input>
        </label>
        <label>
          {" "}
          Email
          <input
            type="text"
            name={"email"}
            value={user?.email || ""}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></input>
        </label>
        <label>
          {" "}
          Role
          <input
            type="text"
            name={"role"}
            value={user?.role || ""}
            onChange={(e) => setUser({ ...user, role: e.target.value })}
          ></input>
        </label>
        <button>{editMode ? "Redigér User" : "Opret User"}</button>{" "}
        <button type="reset">RESET</button>
      </form>
    </div>
  );
};
export default BoUsersForm;
