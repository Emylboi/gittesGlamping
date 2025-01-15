import { useEffect, useState } from "react";
import styles from "./stays.module.css";
import PrintJson from "../../common/PrintJSON/PrintJson";
import useTinyFetch from "../../../hooks/tinyFetch.hook";
import { Link } from "react-router-dom";
import { icons } from "../../../services/icons";

const Stay = ({ stay }) => {
  return (
    <div className={styles.stay}>
      <img src={stay.image} />
      <div className={styles.content}>
        <h3>Title: {stay.title}</h3>
        <p>Description: {stay.description}</p>
        <p>Antal personer: {stay.numberOfPersons}</p>
        <p>Price: {stay.price}kr</p>
        <p>Inkluderer:{stay.includes}</p>
      </div>
    </div>
  );
};

const DebugStay = ({ stay }) => {
  return (
    <div className={styles.debugStay}>
      <PrintJson jsonobj={stay} headline={stay.name}></PrintJson>

      <Link to={`/stays/${stay._id}`}>Stay Page</Link>
    </div>
  );
};

const StayList = ({ stays, debugMode }) => {
  return (
    <div className={styles.list}>
      {stays.map((stay) => {
        return debugMode ? (
          <DebugStay key={stay._id} stay={stay}></DebugStay>
        ) : (
          <Stay key={stay._id} stay={stay}></Stay>
        );
      })}
    </div>
  );
};

const Stays = () => {
  const [stays, setStays] = useState([]);
  const [debugMode, setDebugMode] = useState(true);
  const { data, fetchData } = useTinyFetch();

  useEffect(() => {
    fetchData("/stays");
  }, []);

  useEffect(() => {
    setStays(data);
  }, [data]);

  console.log("data", data);

  return (
    <div className={styles.stays}>
      <div className={styles.debugBtn} onClick={() => setDebugMode(!debugMode)}>
        {icons["FaWrench"]} TOGGLE {debugMode ? "STAY" : "DEBUG"} MODE
      </div>
      <StayList stays={stays} debugMode={debugMode}></StayList>
    </div>
  );
};

export default Stays;
