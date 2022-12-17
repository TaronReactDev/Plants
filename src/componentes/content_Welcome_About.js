import React from "react";

export default function Content_Welcome_About({info}) {

    return (

        <div className="media-txt flex-js content-container">

            <div  style={{
                backgroundImage:`url(${info.img})`,
                backgroundSize:"contain",
                width:info.imgWidth,
                height:info.imgHeight,
                order:info.imgOrder,
                backgroundRepeat:"no-repeat",
            }}/>

            <section className="media-txt__content" style={{order:info.descriptionOrder}}>
                <h2 className="media-txt__content__title" style={{color:info.titleTotalColor}}>
                    {info.title1}
                    <span style={{color:info.titleSecondaryColor}}>{info.title2}</span>
                    {info.title3}
                </h2>
                <p className="media-txt__content__description">
                    {info.description}
                </p>
                {info.button ? <button className="media-txt__content__btn">LEARN MORE</button> : ""}
            </section>
        </div>
    )
}