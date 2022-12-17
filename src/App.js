import Header from "./componentes/header";
import About from "./componentes/content_Welcome_About";
import Projects from "./componentes/projects";
import Houseplant from "./componentes/img/houseplant.svg";
import "./componentes/style/style.scss"
import Price from "./componentes/price";
import ContactUs from "./componentes/contact_us";
import Footer from "./componentes/footer";


function App() {
    const aboutInfo = {
        img: Houseplant,
        imgWidth: 464,
        imgHeight: 479,
        title1: "We are ",
        title2: "professional experienced ",
        title3: "gardeners",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
        button: false,
        titleTotalColor: "#499A18",
        titleSecondaryColor: "#E06733",
        imgOrder: 2,
        descriptionOrder: 1,

    }
    return (
        <>
            <div className="container background">
                <Header/>
            </div>

            <div className="container">
                <About info={aboutInfo}/>
            </div>

            <div className="container background">
                <Projects/>
            </div>
            <div className="container">
                <Price/>
            </div>

            <div className="container background">
                <ContactUs/>
            </div>
            <div className="container ">
                <Footer/>
            </div>
            </>
    );
}

export default App;
