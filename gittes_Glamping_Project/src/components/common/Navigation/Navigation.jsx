import { Link, NavLink } from "react-router-dom";
import styles from "./navigation.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";

// Navigation component  
const Navigation = () => {
    const [activeBM, setActiveBM] = useState(false);

    function navMenu() {
      setActiveBM((prev) => !prev);
    }

  return (
    <div className={styles.navigation}>
      <div className={styles.burgerMenu}>
        {!activeBM ? (
          <RxHamburgerMenu onClick={navMenu} />
        ) : (
          <FaXmark onClick={navMenu} />
        )}
      </div>
      <div className={`${styles.nav} ${activeBM ? styles.show : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : null)}
        >
          Forside
        </NavLink>

        <NavLink
          to="/stays"
          className={({ isActive }) => (isActive ? styles.active : null)}
        >
          Ophold
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? styles.active : null)}
        >
          Kontakt
        </NavLink>

        <NavLink
          to="/activities"
          className={({ isActive }) => (isActive ? styles.active : null)}
        >
          Aktiviteter
        </NavLink>
        <NavLink
          to="/mylist"
          className={({ isActive }) => (isActive ? styles.active : null)}
        >
          Min Liste
        </NavLink>

        <NavLink
          to="/backoffice"
          className={({ isActive }) => (isActive ? styles.active : null)}
        >
          Backoffice
        </NavLink>
      </div>
    </div>
  );
};
export default Navigation;

/* return (
        <div className={styles.navigation}>
            <div className={styles.brand}>
                <Link to={"/"} className={styles.banner}>
         
                   Gittes Glamping
                
                </Link>
            </div>
            <div>
                <div className={styles.routes}>

                    <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : null)}>

                        {icons['FaHouse']}  <span className={styles.title}>HOME</span>

                    </NavLink>

                    <NavLink to="/stays" className={({ isActive }) => (isActive ? styles.active : null)}>

                        {icons['FaProductHunt']} <span className={styles.title}>STAYS</span>

                    </NavLink>

                    <NavLink to="/activities" className={({ isActive }) => (isActive ? styles.active : null)}>

                        {icons['FaBullseye']} <span className={styles.title}>ACTIVITIES</span>

                    </NavLink>

                    <NavLink to="/contacts" className={({ isActive }) => (isActive ? styles.active : null)}>

                        {icons['FaCircleUser']} <span className={styles.title}>CONTACTS</span>

                    </NavLink>

                    <NavLink to="/users" className={({ isActive }) => (isActive ? styles.active : null)}>

                        {icons['FaCircleUser']} <span className={styles.title}>USERS</span>

                    </NavLink>

                    <NavLink to="/backoffice" className={({ isActive }) => (isActive ? styles.active : null)}>

                        {icons['FaUserSecret']} <span className={styles.title}>BACKOFFICE</span>

                    </NavLink>

                </div>

            </div>
        </div>
    ); */
