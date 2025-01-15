import { icons } from '../../../services/icons';
import PrintJson from '../PrintJSON/PrintJson';
import styles from './styleGuide.module.css'

const StyleGuide = () => {
    return (
        <div className={styles.styleGuide}>

            <img src={'/MCDM_Logo.jpg'} width={'100%%'}></img>

            <h1>Styleguide & Globale Klasser</h1>

            <p>Dette er en styleguide der viser de basic styles vi har sat op globalt i vores globale css.</p>
            <p>Herfra kan vi bruge modules.css eller fortsætte i global css det er helt op til projekt, lune, humør.</p>

            <section>

                <h1>Overskrifter</h1>
                <p>Størrelser er sat op i _typography.css.</p>

                <h1>Headline 1</h1>
                <p>Noget om 5 
                    <b>BOLD TEKST</b>
                    og <i>ITALIC TEKST</i> 
                    <a href="">Og et normalt link</a> 
                    og et <a href="" className={'mcdlink'}>MCD link</a>
                </p>

                <h2>Headline 2</h2>
                <p>Noget om 2</p>

                <h3>Headline 3</h3>
                <p>Noget om 3</p>

                <h4>Headline 4</h4>
                <p>Noget om 4</p>

            </section>

            <section>

                <h1>Tabeller </h1>
                <p>Tabeller er sat op i _table.css.</p>

                <table>
                    <thead>
                        <tr>
                            <th>Product Id </th>
                            <th>Titel </th>
                            <th>Price </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1 - 2 - 3</td>
                            <td>Et produkt</td>
                            <td>1000 ,-</td>
                        </tr>
                    </tbody>
                </table>

            </section>
        
            <section>
                <h1>Knapper & Forms</h1>
                <p>Farver er sat op i _forms.css</p>

                <button>En knap</button>

                <form>
                    <input type={"text"} defaultValue={'Et input felt'}></input>
                    <button>En form knap</button>
                </form>

            </section>

            <section>

                <h1>Icons</h1>
                <p>Iconer er sat op i /services/icons.js - her er et par eksempler.</p>

                <span className={'mc-green'}>{icons['FaBeerMugEmpty']}</span>
                <span className={'mc-orange'}>{icons['FaUserSecret']}</span>
                <span className={'mc-yellow'}>{icons['FaBullseye']}</span>

                <br/>

                {icons['FaBeerMugEmpty']}
                {icons['FaUserSecret']}
                {icons['FaBullseye']}

                <br/>

                {icons['FaBoltLightning']}
                {icons['FaCircleQuestion']}
                {icons['FaHouse']}

            </section> 

            <section>

                <h1>Farver</h1>
                <p>Farver er sat op i _variables.css</p>
            
                <b>Vi har faver i _variables.css - her bruger vi de tre globale uttillities classes.</b>
                <h3 className={'mc-green'}>var(mc-color-green)</h3>
                <h3 className={'mc-orange'}>var(mc-color-orange)</h3>
                <h3 className={'mc-yellow'}>var(mc-color-yellow)</h3>

                <b>Og her de tre globale uttillities background classes. (mest for at eksemplficere og se vores farver)</b>
                <h3 className={'mc-green-bg'}>var(mc-color-green)</h3>
                <h3 className={'mc-orange-bg'}>var(mc-color-orange)</h3>
                <h3 className={'mc-yellow-bg'}>var(mc-color-yellow)</h3>

            </section>

            <section>

                <h1>Knapper & Forms</h1>

                <button>En knap</button>

                <form>
                    <input type={"text"} defaultValue={'Et input felt'}></input>
                    <button>En form knap</button>
                </form>

            </section>

            <section>

                <h1>Print Json</h1>

                <PrintJson jsonobj={
                    {
                        "hello" : "world",
                        "array" : [
                            {
                                "se" : "jeglaverjson"
                            }
                        ]
                    }
                }></PrintJson>

            </section>
        </div>
    );
};
export default StyleGuide;