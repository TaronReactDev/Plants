import React, {useState} from "react";
import "./style/style.scss";

export default function Price() {
    const [id, setId] = useState();
    const handlePriceClick =(index)=>()=>{
        id===index? setId(-1):setId(index)
    }
    const priceList = [
        {
            title:"Basics",
            description: "Release of Letraset sheets containing Lorem Ipsum passages, and more recently",
            price:15,

        },
         {
            title:"Standard",
            description: "Release of Letraset sheets containing Lorem Ipsum passages, and more recently",
            price:25,

        },
         {
            title:"Pro care",
            description: "Release of Letraset sheets containing Lorem Ipsum passages, and more recently",
            price:35,

        },

        ];
    const priceBtn = priceList.map((el,index) => {
        return <li className={`price__container__btn-container__item ${id===index ? "openPriceList" : ""}`} >

            <header className='price__container__btn-container__item__header flex-js'>
                <span className="price__container__btn-container__item__Elem">{el.title}</span>
                <span onClick={handlePriceClick(index)}
                      className={`price__container__btn-container__item__arrow ${id===index ?  "open" : ""}`} >
                    <span className='arrow-Icon'  ></span>
                </span>
            </header>

                { id===index ? <span className="priceListBlock openPriceList">
            <div className="priceListBlock__line"></div>
                <span className="priceListBlock__description">{el.description}</span>
                <span className="priceListBlock__price">{el.price} </span>
            <button className="priceListBlock__order-btn">Order</button>

            </span> : ""}

        </li>

    })
    return (

        <section className="price flex-js content-container">
            <div className="price__container">
                <span className="price__container__title">
                    Price
                </span>
                <ul className="price__container__btn-container">
                    {priceBtn}
                </ul>
            </div>

            <div className="price__contactUs">
                <span className="price__contactUs__slogan">
                    Our best <span>gardeners</span> are ready to help you
                </span>

                <button className="price__contactUs__btn">Contact us
                </button>
                <div className="price__contactUs__img"></div>
            </div>
        </section>


    )
}