import SectionTitleBox from "../../../common/sectionTitleBox/SectionTitleBox";
import Review from "../Review/Review";
import styles from "./reviewsSection.module.css";

const ReviewsSection = () => {
  return (
    <section className={styles.reviewsSection}>
      <SectionTitleBox title="Vores gæster udtaler"></SectionTitleBox>

      <Review name="Lise" age="34" title="Har været på romantisk getaway" review="Min kæreste og jeg fejrede vores årsdag med et ophold hos Gittes Glamping. Det vil vi helt sikkert gøre igen, personalet var virkelig søde og servicemindede, og maden og stemningen var i top." />
      <Review name="Johanne" age="22" title="Har været på weekendtur" review="Jeg blev inviteret med af min veninde. Det var første gang jeg prøvede glamping. Jeg var lidt skeptisk, da jeg ikke bryder mig om at sove udenfor. Men jeg blev positivt overrasket. Sengene var gode, og det var slet ikke ubehageligt at vågne op i teltet, som det ellers plejer at være i et normalt telt." />
      <Review name="Benjamin" age="42" title="Har været på Familiepakken" review="Top karakter til Gittes Glamping herfra! Perfekt blanding af primitivt og luksuiøst. Og ungerne elskede det!" />
      <Review name="Peter" age="61" title="Har været på Weekendtur" review="Jeg havde en rigtig hyggelig weekeend, og maden er i særdeleshed en oplevelse værd. Min hustru synes kanoturen var rigtig idyllisk. Jeg er dog ikke så vild med at sejle." />
    </section>
  );
};

export default ReviewsSection;
