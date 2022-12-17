import React from "react";
import C from "./img/footer/©.svg";
import Insta from "./img/footer/insta.svg";
import  Fb from "./img/footer/fb.svg"
import  Tw from "./img/footer/tw.svg"
import  Pinterest from "./img/footer/pinterest.svg"

export default function Footer() {
 return (  <section  className="content-container footer flex-js">

    <ul className="footer__data flex-js">
        <li><img src={C}/></li>
        <li>2022</li>
        <li>github</li>
    </ul>


        <span>Rolling Scopes School</span>

    <ul className="footer__social-icons flex-js">
        <li><a href="https://www.w3schools.com"><img src={Insta}/></a></li>
        <li><a href="https://www.w3schools.com"><img src={Tw}/></a></li>
        <li><a href="https://www.w3schools.com"><img src={Fb}/></a></li>
        <li><a href="https://www.w3schools.com"><img src={Pinterest}/></a></li>
    </ul>
    </section>)
}