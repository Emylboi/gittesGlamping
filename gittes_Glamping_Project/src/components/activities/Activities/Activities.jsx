import { useEffect, useState } from "react";
import SectionTitleBox from "../../common/sectionTitleBox/SectionTitleBox";
import Activity from "../Activity/Activity";
import styles from "./activities.module.css";
import useTinyFetch from "../../../hooks/tinyFetch.hook";

const Activities = () => {
  // useState that contains an empty array as default value.
  const [activities, setActivities] = useState([]);

  // Uses useTinyFetch hook to fetch data from the server.
  const { data, fetchData, loading, error, noDataMessage } = useTinyFetch();

  // Fetches data from /activities endpoint from the server.
  useEffect(() => {
    fetchData("/activities");
  }, []);

  // Sets the activities state to the data fetched from the server.
  useEffect(() => {
    setActivities(data);
  }, [data]);

  return (
    <div className={styles.activity}>
      {loading && <p>Loading...</p>}

      {noDataMessage && <p>{noDataMessage}</p>}

      {activities.length > 0 &&
        activities.map((activity) => (
          <Activity key={activity._id} activity={activity} />
        ))}
    </div>
  );
};

export default Activities;
