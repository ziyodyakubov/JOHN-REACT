import "./style.css"
import image1 from "./../../assets/image-1.png"
import image2 from "./../../assets/image-2.png"
import image3 from "./../../assets/image-3.png"


function Section_3(){
    return (
        <>
            <section id="section-3">
                <div className="container-2 section3-wrapper">
                    <small>Featured works</small>

                    <div className="card-wrapper">
                        <div className="card-2">
                            <img src={image1} alt="" />

                            <div className="text-wrapper-2">
                                <h3>Designing Dashboards</h3>

                                <div className="date-wrap">
                                    <div className="num"><h4>2023</h4></div>
                                    <h5>Dashboard</h5>
                                </div>

                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                        </div>

                        <div className="card-2">
                            <img src={image2} alt="image2" />

                            <div className="text-wrapper-2">
                                <h3>Vibrant Portraits of 2020</h3>

                                <div className="date-wrap">
                                    <div className="num"><h4>2018</h4></div>
                                    <h5>DIllustration</h5>
                                </div>

                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                        </div>

                        <div className="card-2">
                            <img src={image3} alt="image 3" />

                            <div className="text-wrapper-2">
                                <h3>36 Days of Malayalam type</h3>

                                <div className="date-wrap">
                                    <div className="num"><h4>2018</h4></div>
                                    <h5>Typography</h5>
                                </div>

                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section_3