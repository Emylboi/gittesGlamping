import SectionTitleBox from "../../common/sectionTitleBox/SectionTitleBox";
import ActivitiesDescription from "../activitiesDescription/ActivitiesDescription";
import styles from "./activity.module.css";

// This component shows the information of each activity in the activities section.
// We get the activity as a prop from the Activities component.
const Activity = ({ activity }) => {
  const { title, image, date, time, description } = activity;
  return (
    <section className={styles.activity}>
      <SectionTitleBox title={title} className={styles.titleBox}  />
      <img src={image} className={styles.picture} />
      <ActivitiesDescription
        date={date}
        time={time}
        description={description}
      />
    </section>
  );
};

export default Activity;
