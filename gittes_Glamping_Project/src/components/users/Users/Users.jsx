import { useEffect, useState } from "react";
import styles from "./users.module.css";
import PrintJson from "../../common/PrintJSON/PrintJson";
import useTinyFetch from "../../../hooks/tinyFetch.hook";
import { Link } from "react-router-dom";
import { icons } from "../../../services/icons";

const User = ({ user }) => {
  return (
    <div className={styles.user}>
      <img src={user.image} />
      <div className={styles.content}>
        <h3>{user.name}</h3>
        <p>{user.password}</p>
        <p>{user.email}</p>
        <p>{user.role}</p>
      </div>
    </div>
  );
};

const DebugUser = ({ user }) => {
  return (
    <div className={styles.debugUser}>
      <PrintJson jsonobj={user} headline={user.name}></PrintJson>

      <Link to={`/users/${user._id}`}>User Page</Link>
    </div>
  );
};

const UserList = ({ users, debugMode }) => {
  return (
    <div className={styles.list}>
      {users.map((user) => {
        return debugMode ? (
          <DebugUser key={user._id} user={user}></DebugUser>
        ) : (
          <User key={user._id} user={user}></User>
        );
      })}
    </div>
  );
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const [debugMode, setDebugMode] = useState(true);
  const { data, fetchData } = useTinyFetch();

  useEffect(() => {
    fetchData("/users");
  }, []);

  useEffect(() => {
    setUsers(data);
  }, [data]);

  console.log("data", data);

  return (
    <div className={styles.users}>
      <div className={styles.debugBtn} onClick={() => setDebugMode(!debugMode)}>
        {icons["FaWrench"]} TOGGLE {debugMode ? "USER" : "DEBUG"} MODE
      </div>

      <UserList users={users} debugMode={debugMode}></UserList>
    </div>
  );
};

export default Users;
