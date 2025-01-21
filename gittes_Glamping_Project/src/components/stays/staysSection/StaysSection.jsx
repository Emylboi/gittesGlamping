import SectionTitleBox from "../../common/sectionTitleBox/SectionTitleBox";
import Stays from "../Stays/Stays";
import styles from "./staysSection.module.css";

const StaysSection = () => {
  return (
    <section className={styles.staysSection}>
        <Stays/>
    </section>
  );
}

export default StaysSection;    