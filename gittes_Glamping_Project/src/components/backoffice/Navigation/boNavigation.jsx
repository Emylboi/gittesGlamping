import { Link, NavLink } from "react-router-dom";
import styles from "./boNavigation.module.css";
import { icons } from "../../../services/icons";
import useAuth from "../../../hooks/useAuth";

// This component is the navigation bar for the backoffice section.
const BoNavigation = () => {
  const { signOut, user } = useAuth();

  return (
    <div className={styles.navigation}>
      <div className={styles.welcomeMSG}>
        <h1>Hej {user.name}</h1>
        <button onClick={() => signOut()}>Log Ud</button>
      </div>

      <div className={styles.brand}>
        <Link to={"/"} className={styles.banner}>
          Tilbage til forsiden
        </Link>
      </div>

      <div>
        <div className={styles.routes}>
          <NavLink
            to="/backoffice/users"
            className={({ isActive }) => (isActive ? styles.active : null)}
          >
            {icons["FaProductHunt"]} <span className={styles.title}>Users</span>
          </NavLink>

          <NavLink
            to="/backoffice/stays"
            className={({ isActive }) => (isActive ? styles.active : null)}
          >
            {icons["FaProductHunt"]} <span className={styles.title}>Stays</span>
          </NavLink>

          <NavLink
            to="/backoffice/reviews"
            className={({ isActive }) => (isActive ? styles.active : null)}
          >
            {icons["FaProductHunt"]}{" "}
            <span className={styles.title}>Reviews</span>
          </NavLink>

          <NavLink
            to="/backoffice/activities"
            className={({ isActive }) => (isActive ? styles.active : null)}
          >
            {icons["FaProductHunt"]}{" "}
            <span className={styles.title}>Activities</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default BoNavigation;
