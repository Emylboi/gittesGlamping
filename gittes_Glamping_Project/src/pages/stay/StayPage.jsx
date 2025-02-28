import Breadcrumbs from "../../components/common/Breadcrumbs/Breadcrumbs";
import Footer from "../../components/common/Footer/Footer";
import styles from "./stayPage.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const StayPage = () => {
  const { state: stay } = useLocation(); // Access passed state

  if (!stay) {
    return <div>Error: No data found for this stay.</div>;
  }

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/contact`);
  };

  const paths = [
    { name: "Ophold", link: "/stays" },
    { name: stay.title, link: `/stays/${stay._id}` },
  ];

  return (
    <div className={styles.stayPage}>
      <img src={stay.image} className={styles.stayPicture} />
      <div className={styles.stayContent}>
        <div className={styles.stayInfo}>
          <Breadcrumbs paths={paths} />
          <h1 className={styles.stayTitle}>{stay.title}</h1>
          <p className={styles.stayDescription}>{stay.description}</p>{" "}
          <p className={styles.stayPrice}>Pris: {stay.price},-</p>
          <div className={styles.stayPersons}>
            {stay.includes.map((include) => (
              <p key={include}>{include}</p>
            ))}
          </div>
          <button className={styles.bookButton} onClick={handleClick}>
            Book nu
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StayPage;
