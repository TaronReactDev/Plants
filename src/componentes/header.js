import React from "react";
import Content_Welcome_About from "./content_Welcome_About";
import Plant from "./img/leafs.svg"
import  "./style/style.scss"


export default function Header() {

    const menu = ["Home", "About us", "Service", "Price", "Contacts"]

    const welcomeInfo = {
        img: Plant,
        imgWidth: 448.8,
        imgHeight: 407.36,
        title1: "We grow ",
        title2: "plants ",
        title3: "and give you oxygen",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        button:true,
        titleTotalColor: "#717171" ,
        titleSecondaryColor: "#499A18",
        imgOrder:1,
        descriptionOrder:2,

    }


    const menuItem = menu.map((el) => {
        return (
            <li className="header_nav_item-container_item">
                <span>{el}</span>
            </li>
        )
    })


    return (
            <header className="content-container ">
              <section className="header flex-js">
                    <span className="header_logo">
                    <img src={require(`./img/logo.jpg`)} className="header_logo_img" alt="logo"/>
                        Plants
                    </span>
                  <nav className="header_nav">
                      <ul className="header_nav_item-container flex-js">
                          {menuItem}
                      </ul>
                  </nav>
              </section>

                <Content_Welcome_About info={welcomeInfo}/>
        </header>)
}