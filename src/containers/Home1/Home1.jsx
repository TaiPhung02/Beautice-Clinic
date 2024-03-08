import React from "react";
import "./home1.css";
import MainBanner from "../../assets/img/slide-bg.png";
import HomeBanner from "../../assets/img/home-banner.png";
import { Link } from "react-router-dom";
import { Title } from "../../components";

const Home1 = () => {
    return (
        <>
            {/* Banner */}
            <div className="banner">
                <div className="banner__main">
                    <img src={MainBanner} alt="banner" />
                </div>
                <div className="banner__content">
                    <div className="banner__heading">
                        <h1>Clinic & beauty consultant</h1>
                        <p>
                            It is a long established fact that a reader will be
                            by the readable content of a page.
                        </p>
                        <Link to="/">
                            <button className="btn">More Details</button>
                        </Link>
                    </div>
                    <div className="banner__img">
                        <img src={HomeBanner} alt="illustration" />
                    </div>
                </div>
                <div className="banner__slide-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="71"
                        height="9"
                        viewBox="0 0 71 9"
                        fill="none"
                    >
                        <path
                            d="M56.1826 4.36384C56.1826 5.21628 56.8737 5.90732 57.7261 5.90732H69.4565C70.309 5.90732 71 5.21628 71 4.36384C71 3.5114 70.309 2.82036 69.4565 2.82036H57.7261C56.8737 2.82036 56.1826 3.5114 56.1826 4.36384Z"
                            fill="#EEEEEE"
                        />
                        <rect
                            width="25.313"
                            height="8.14614"
                            rx="4.07307"
                            transform="matrix(1 0 0 -1 22.8435 9)"
                            fill="#414880"
                        />
                        <rect
                            width="14.8174"
                            height="3.08696"
                            rx="1.54348"
                            transform="matrix(1 0 0 -1 0 5.90732)"
                            fill="#EEEEEE"
                        />
                    </svg>
                </div>
            </div>
            {/* Services */}
            <div className="sevices">
                <Title
                    widthHeading={"470px"}
                    heightHeading={"97px"}
                    widthDesc={"848px"}
                    title="Main Services"
                    heading="Learn services to focus on your beauty"
                    description="Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. 
                    Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
                />
            </div>
        </>
    );
};

export default Home1;
