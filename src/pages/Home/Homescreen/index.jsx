import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import MyPortfolio from "../Myportfolio";
import Myskills from "../Myskills";
import Top from "../Top";

export default function Home () {
    return(
        <>
        <Top/>
        <Myskills/>
        <AboutMe/>
        <MyPortfolio/>
        <ContactMe/>
        <Footer/>

        </>
    )
}