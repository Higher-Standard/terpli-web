import React, {useState} from 'react'
import Footer from '../components/Footer/index';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Product from '../components/Product';
import Sidebar from '../components/Sidebar';
import Impact from '../components/Impact';
import Team from '../components/Team';
import Sponsors from "../components/Sponsors/index"
import Contact from '../components/Contact';
import TerpenesSection from '../components/Terpenes';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HeroSection />
            {/* <TerpenesSection /> */}
            <InfoSection {...homeObjOne} />
            <TerpenesSection />
            <InfoSection {...homeObjThree} />
            <Services />
            <Product />
            <Impact />
            <Team />
            <Sponsors/>
            <Contact />
            {/* <InfoSection {...homeObjFour} /> */}
            <Footer />

        </>
    )
}

export default Home
