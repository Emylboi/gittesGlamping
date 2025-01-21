import SectionTitleBox from "../../common/sectionTitleBox/SectionTitleBox";
import ActivitiesDescription from "../activitiesDescription/ActivitiesDescription";
import styles from "./activity.module.css";

const Activity = ({activity}) => {
    const {title, image, date, time, description} = activity;
  return (
    <section className={styles.activity}>
      <SectionTitleBox title={title} className={styles.titleBox} />
      <img src={image} className={styles.picture} />
      <ActivitiesDescription date={date} time={time} description={description} />
    </section>
  );
};

export default Activity;
