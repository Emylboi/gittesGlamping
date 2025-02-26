import { Outlet } from "react-router-dom";
import styles from "./backofficePage.module.css";
import BoNavigation from "../../components/backoffice/Navigation/boNavigation";
import useAuth from "../../hooks/useAuth";

const BackofficePage = () => {
  const { signOut, user } = useAuth();

  return (
    <div className={styles.page}>
      <BoNavigation></BoNavigation>
      <div>
        <h1>Hej {user.name}</h1>
        <button onClick={() => signOut()}>Log Ud</button>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default BackofficePage;
