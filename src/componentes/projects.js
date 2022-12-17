import React from "react";
import Img1 from "./img/service_img/first.jpg";
import Img2 from "./img/service_img/first-1.jpg";
import Img3 from "./img/service_img/first-2.jpg";
import Img4 from "./img/service_img/first-3.jpg";
import Img5 from "./img/service_img/first-4.jpg";
import Img6 from "./img/service_img/first-5.jpg";

export default function Project() {
    const projectArr = [
        {
            img: Img1,
            title: "Garden care",
            description: "Lorem Ipsum has been the industry",
        },
        {
            img: Img2,
            title: "Planting",
            description: "Lorem Ipsum has been the industry",
        },
        {
            img: Img3,
            title: "Lawn care",
            description: "Lorem Ipsum has been the industry",
        },
        {
            img: Img4,
            title: "Planting",
            description: "Lorem Ipsum has been the industry",
        },
        {
            img: Img5,
            title: "Garden care",
            description: "Lorem Ipsum has been the industry",
        },
        {
            img: Img6,
            title: "Planting",
            description: "Lorem Ipsum has been the industry",
        },

    ]

    const projectMenu =["Gardens", "Lawn", "Planting" ]

    const projectsItem = projectArr.map((el) => {
        return (
            <div className="projects__img-galleria__item">
                <img src={el.img} alt="img"/>
                <span className="projects__img-galleria__item__title">{el.title}</span>
                <span className="projects__img-galleria__item__description">{el.description}</span>
            </div>
        )
    })

    const menuItem = projectMenu.map((el)=>{
        return(
            <li className="projects__navigation__navbar__container__item">
                <button className="projects__navigation__navbar__container__item__btn">
                    {el}
                </button>
            </li>
        )
    })

    return (
            <section className="projects content-container">
            <div className="projects__navigation">
                <h2 className="projects__navigation__title">Service and our projects</h2>
                <nav className="projects__navigation__navbar">
                    <ul  className="projects__navigation__navbar__container flex-js">
                        {menuItem}
                    </ul>
                </nav>
            </div>
            <div className="projects__img-galleria flex-js">
                {projectsItem}
            </div>
            </section>
    )

}