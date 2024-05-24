import "./style.css"
import React from "react"
import image1 from "./../../assets/image-1.png"
import image2 from "./../../assets/image-2.png"
import image3 from "./../../assets/image-3.png"

function Section_3() {

    const cards = [
        { image: image1, title: "Designing Dashboards", year: 2020, fix: "Dashboard", desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
        { image: image2, title: "Vibrant Portraits of 2020", year: 2018, fix: "Illustration", desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
        { image: image3, title: "36 Days of Malayalam type", year: 2018, fix: "Typography", desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
    ];

    return (
        <>
            <section id="section-3">
                <div className="container-2 section3-wrapper">
                    <small>Featured works</small>

                    <div className="card-wrapper">
                        {cards.map((card, index) => (
                            <div className="card-2" key={index}>
                                <img src={card.image} alt={card.title} />
                                <div className="text-wrapper-2">
                                    <h3>{card.title}</h3>
                                    <div className="date-wrap">
                                        <div className="num">
                                            <h4>{card.year}</h4>
                                        </div>
                                        <h5>{card.fix}</h5>
                                    </div>
                                    <p>{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section_3;
