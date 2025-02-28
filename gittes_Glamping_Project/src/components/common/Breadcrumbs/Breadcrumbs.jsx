import { Link, useLocation } from "react-router-dom";
import styles from "./breadcrumbs.module.css";

const Breadcrumbs = ({ paths }) => {
  const location = useLocation();

  const normalizePath = (path) => {
    const normalizedPath = path.split('?')[0].replace(/\/$/, "");
    return normalizedPath;
  };

  return (
    <nav>
      {paths.map((path, index) => (
        <span key={index} className={styles.breadcrumbs}>
          {/* Check if it's the current page by comparing the normalized paths */}
          {normalizePath(location.pathname) === normalizePath(path.link) ? (
            <span>{path.name}</span> // Render as plain text for current page
          ) : (
            <Link to={path.link}>{path.name}</Link> // Render as link for previous breadcrumbs
          )}
          {index < paths.length - 1 && " > "}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
