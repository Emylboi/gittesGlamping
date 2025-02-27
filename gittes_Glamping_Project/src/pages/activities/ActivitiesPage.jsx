
import Activities from "../../components/activities/Activities/Activities";
import Footer from "../../components/common/Footer/Footer";
import HeroBackground from "../../components/common/heroBackground/HeroBackground";
import SectionDescription from "../../components/common/sectionDescription/SectionDescription";

//
const ActivitiesPage = () => {
  return (
    <div>
      <HeroBackground images={["./image_04.jpg"]} title="Aktiviteter" />
      <SectionDescription
        title="Ingen skal kede sig hos Gitte"
        description="Glamping er mere end blot en indkvartering - det er en mulighed for at fordybe dig i naturen og skabe minder, der varer livet ud. Uanset om du foretrækker en eventyrlig kanotur, en oplysende naturvandring, hjertevarm samvær omkring bålet, smagfulde oplevelser som vinsmagning eller morgenyoga, der giver dig indre ro og balance i naturens skød - vil vi hos Gittes Glamping imødekomme dine ønsker."
      />
      <Activities />
      <Footer />
    </div>
  );
};

export default ActivitiesPage;
