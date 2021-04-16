import styles from "./Home.module.css";

//Components
import { FrontJumbotron } from "./components/FrontJumbotron/FrontJumbotron.js"
import { About } from "./components/About/About";
import { OurValues } from "./components/OurValues/OurValues";
import { Services } from "./components/Services/Services";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { CustomersOpinion } from "./components/CustomersOpinion/CustomersOpinion";
import { Pricing } from "./components/Pricing/Pricing";

export function Home() {
    return (
        <div className={styles.homeContainer}>
            <header>
                {/* <Scrollspy /> */}
            </header>
            <main>
                <FrontJumbotron />
                <About />
                <OurValues />
                <Services />
                <Portfolio />
                <CustomersOpinion />
                <Pricing />
                {/* <Contact/> */}
                {/* <img /> */}
            </main>
            <footer>
                {/* <Footer /> */}
            </footer>
        </div>
    );
}