import HeroBackground from "../../components/common/heroBackground/HeroBackground";
import SectionDescription from "../../components/common/sectionDescription/SectionDescription";
import StaysSection from "../../components/stays/staysSection/StaysSection";

const StaysPage = () => {
  return (
    <div>
      <HeroBackground image="./image_01.jpg" title="Vores ophold" />
      <SectionDescription
        title="Vi har ophold til enhver smag"
        description="Vores glampingophold er skabt til at tilbyde en kombination af eventyr og afslapning. Det er den ideelle flugt fra støj og stress, og det perfekte sted at genoplade batterierne i en naturskøn indstilling. Book dit ophold i dag og giv dig selv lov til at fordybe dig i naturen og nyde luksus i det fri. Vi ser frem til at byde dig velkommen til en oplevelse fyldt med komfort, eventyr og skønhed."
      />
      <StaysSection />
    </div>
  );
};

export default StaysPage;
