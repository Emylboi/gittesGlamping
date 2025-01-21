import { useEffect, useState } from "react";
import styles from "./stays.module.css";
import useTinyFetch from "../../../hooks/tinyFetch.hook";
import SectionTitleBox from "../../common/sectionTitleBox/SectionTitleBox";
import { useNavigate } from "react-router-dom";

const Stay = ({ stay }) => {
  const navigate = useNavigate(); // Hook to navigate to a different route

  const handleClick = () => {
    navigate(`/stays/${stay._id}`, { state: stay }); // Pass the stay data through state
  };

  return (
    <div className={styles.staySection}>
      <div className={styles.stayContainer}>
        <div
          className={styles.stay}
          style={{ backgroundImage: `url(${stay.image})` }}
        >
          <SectionTitleBox
            title={stay.title}
            numberOfPersons={stay.numberOfPersons}
            price={stay.price}
            className={styles.titleBox}
          />
          <button className={styles.viewButton} onClick={handleClick}>
            Læs mere
          </button>
        </div>
      </div>
    </div>
  );
};

const Stays = () => {
  const [stays, setStays] = useState([]);
  const { data, fetchData } = useTinyFetch();

  useEffect(() => {
    fetchData("/stays");
  }, []);

  useEffect(() => {
    setStays(data);
  }, [data]);

  return (
    <div className={styles.stays}>
      {stays.map((stay) => (
        <Stay key={stay._id} stay={stay} />
      ))}
    </div>
  );
};

export default Stays;
