import { useLocation } from "react-router-dom";
import styles from "./stayPage.module.css";
import Breadcrumbs from "../../components/common/Breadcrumbs/Breadcrumbs";

const StayPage = () => {
  const { state: stay } = useLocation(); // Access passed state

  if (!stay) {
    return <div>Error: No data found for this stay.</div>;
  }

  const paths = [
    { name: "Ophold", link: "/stays" },
    { name: stay.title, link: `/stays/${stay.id}` },
  ];

  return (
    <div className={styles.stayPage}>
      <img src={stay.image} className={styles.stayPicture} />
      <div className={styles.stayContent}>
        <div className={styles.stayInfo}>
          <Breadcrumbs paths={paths} /> {/* Dynamic breadcrumb */}
          <h1 className={styles.stayTitle}>{stay.title}</h1>
          <p className={styles.stayDescription}>{stay.description}</p>
          <p className={styles.stayPrice}>Pris: {stay.price},-</p>
          <div className={styles.stayPersons}>
            {stay.includes.map((include) => (
              <p key={include}>{include}</p>
            ))}
          </div>
          <button className={styles.bookButton}>Book nu</button>
        </div>
      </div>
    </div>
  );
};

export default StayPage;
