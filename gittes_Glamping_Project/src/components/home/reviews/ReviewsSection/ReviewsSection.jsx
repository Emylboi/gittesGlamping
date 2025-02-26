import SectionTitleBox from "../../../common/sectionTitleBox/SectionTitleBox";
import Review from "../Review/Review";
import styles from "./reviewsSection.module.css";

const ReviewsSection = () => {
  return (
    <section className={styles.reviewsSection}>
      <SectionTitleBox title="Vores gæster udtaler"></SectionTitleBox>

      <Review/>
    </section>
  );
};

export default ReviewsSection;
