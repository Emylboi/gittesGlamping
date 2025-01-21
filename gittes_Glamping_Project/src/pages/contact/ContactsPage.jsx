import Footer from "../../components/common/Footer/Footer";
import HeroBackground from "../../components/common/heroBackground/HeroBackground";
import SectionDescription from "../../components/common/sectionDescription/SectionDescription";
import ContactForm from "../../components/contact/contactForm/ContactForm";

const ContactsPage = () => {

    return (
        <div>
            <HeroBackground image="./image_03.jpg" title="Kontakt Gitte" />
            <SectionDescription title="Vil du booke et ophold? Eller har du blot spørgsmål?" description="Så tøv ikke med at kontakte os herunder. Vi bestræber os på at svare på henvendelser indenfor 24 timer, men op til ferier kan der være travlt, og svartiden kan derfor være op til 48 timer."/>
            <ContactForm/>
            <Footer/>
        </div>
    )

}

export default ContactsPage;