import { Link, NavLink } from 'react-router-dom';
import styles from './navigation.module.css'
import { icons } from '../../../services/icons';
const Navigation = () => {

    return (
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
    );

};
export default Navigation;