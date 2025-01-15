import { Link, NavLink } from 'react-router-dom';
import styles from './boNavigation.module.css'
import { icons } from '../../../services/icons';

const BoNavigation = () => {

    return (
        <div className={styles.navigation}>
            <div className={styles.brand}>
                <Link to={"/"} className={styles.banner}>
         
                   Backoffice Navigation
                
                </Link>
            </div>
            <div>
                <div className={styles.routes}>

                    <NavLink to="/backoffice/users" className={({ isActive }) => (isActive ? styles.active : null)}>

                        {icons['FaProductHunt']}  <span className={styles.title}>Backoffice Users</span>

                    </NavLink>

                    <NavLink to="/backoffice/stays" className={({ isActive }) => (isActive ? styles.active : null)}>

                        {icons['FaProductHunt']}  <span className={styles.title}>Backoffice Stays</span>

                    </NavLink>
                    
                </div>

            </div>
        </div>
    );

};
export default BoNavigation;