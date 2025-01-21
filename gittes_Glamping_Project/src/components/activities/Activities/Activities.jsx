import { useEffect, useState } from "react";
import SectionTitleBox from "../../common/sectionTitleBox/SectionTitleBox";
import Activity from "../Activity/Activity";
import styles from "./activities.module.css";
import useTinyFetch from "../../../hooks/tinyFetch.hook";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const { data, fetchData } = useTinyFetch();

  useEffect(() => {
    fetchData("/activities");
  }, []);

  useEffect(() => {
    setActivities(data);
  }, [data]);

  return (
    <div className={styles.activity}>
      {activities?.map((activity) => (
        <Activity
            key={activity._id}
            activity={activity}

        />
      ))}
    </div>
  );
};

export default Activities;
