import React, {useState} from "react";


export default function ContactUs() {
    const [openCityList, setOpenCityList] = useState(false);
    const [openCityInfo, setOpenCityInfo] = useState();
    const [id, setId] = useState(-1);

    const cityList = [{
        City: "Yonkers, NY", Phone: "+1 914 678 0003", OfficeAdress: "511 Warburton Ave",
    }, {
        City: "Canandaigua, NY", Phone: "+1 585 393 0001", OfficeAdress: "151 Charlotte Street",
    }, {
        City: "Sherrill, NY", Phone: "+1 315 908 0004", OfficeAdress: "14 WEST Noyes BLVD",
    }, {
        City: "New York City", Phone: "+1 212 456 0002", OfficeAdress: "9 East 91st Street",
    },];

    const handleCityItemCLick = (index) => () => {
        document.getElementsByClassName("contactUs__content__city")[0].classList.add("boxShadow");

        setOpenCityList(!openCityList);
        setId(index);

    }

    const city = cityList.map((el, index) => {

        return (<li className="cityList-container__item" onClick={handleCityItemCLick(index)}>{el.City}</li>)
    })


    const handleCityCLick = () => {
        document.getElementsByClassName("contactUs__content__city")[0].classList.remove("boxShadow");

        document.getElementsByClassName("item__arrow")[0].classList.toggle("cityActiv");
        document.getElementsByClassName("contactUs__content__city__section")[0].classList.toggle("cityActivContainer");
        if (id > -1) {
            setId(-1)
        } else {
            setOpenCityList(!openCityList)

        }
    }


    return (<section className="content-container contactUs">
        <span className="contactUs__title">Contact us</span>

        <div className="contactUs__content flex-js">
            <div className="contactUs__content__bgImg"></div>

            <span className="contactUs__content__city">

              <section className="contactUs__content__city__section flex-js">
               <span className="contactUs__content__city__title">{id > -1 ? cityList[id].City : "City"}</span>
               <span className={`item__arrow`} onClick={handleCityCLick}>
                    <span className='arrow-Icon'></span>
                </span>
              </section>

                {openCityList ? <ul className="cityList-container">
                    {city}
                </ul> : ""}

                {id > -1 ? <ul className="cityList-container__city__info">
                    <li className="cityList-container__city__info__item">
                        <span>City: </span>
                        <span>{cityList[id].City} </span>
                    </li>
                    <li className="cityList-container__city__info__item">

                        <span>Phone: </span>
                        <span> {cityList[id].Phone}</span>
                    </li>
                    <li className="cityList-container__city__info__item">

                        <span> Office adress: </span>
                        <span>{cityList[id].OfficeAdress} </span>
                    </li>
                    <li className="cityList-container__city__info__item__call-us">
                        <a href={`tel:${cityList[id].Phone}`}>Call us</a>
                    </li>
                </ul> : ""}
            </span>
        </div>

    </section>)
}