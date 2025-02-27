import { useNavigate } from "react-router-dom";
import Footer from "../../components/common/Footer/Footer";
import HeroBackground from "../../components/common/heroBackground/HeroBackground";
import SectionDescription from "../../components/common/sectionDescription/SectionDescription";
import ReviewsSection from "../../components/home/reviews/ReviewsSection/ReviewsSection";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HeroBackground
        images={["./image_00.jpg", "./image_01.jpg", "./image_02.jpg"]}
        title="Gittes Glamping"
        button="BOOK NU"
        isSlider={true}
      />
      <SectionDescription
        title="Kom og prøv glamping hos Gitte!"
        description="Vi er stolte af at byde dig velkommen til Gitte's Glamping, hvor hjertevarme og omsorg møder naturens skønhed og eventyr. Vores dedikerede team, anført af Gitte selv, er her for at skabe den perfekte ramme om din luksuriøse udendørsoplevelse. Vi stræber efter at skabe minder og fordybelse, uanset om du besøger os som par, familie eller soloeventyr. Vi tilbyder bred vifte af aktiviteter og arrangementer, der passer til alle aldre og interesser. Udforsk naturen, slap af ved bålet, del historier med nye venner, eller find indre ro med vores wellnessaktiviteter."
        imageSrc="./gitte.jpg"
        buttonText="SE VORES OPHOLD"
        onButtonClick={() => navigate("/stays")}
      />
      <ReviewsSection />
      <Footer/>
    </div>
  );
};

export default HomePage;
