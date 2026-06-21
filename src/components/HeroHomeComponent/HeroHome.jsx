import React from "react";
import "./HeroHome.css";
import Button from "../common/Button/Button";

const img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlfTX1sHDg6D4VTIALoyk7My4gN8ffzYA3NccByOO6lFIT6heiGDydtLg&s=10";
const img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTsvIBHsrvXLoRJZmDMxxY-uszFKbnZF8noz8TNUpy8wN41ZBOmL-RFw&s=10";
const img3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9v95mAQngUZGPZnOWB4x7MGcb2NP-qIHNX2b-ZkDJ4A1GbZ5OAjH27-PW&s=10";
const img4 = "https://elevate-tsa.com/wp-content/uploads/2020/03/ReverseBungee-Slingshot-2.jpg";
const img5 = "https://campwilddhauj.in/blog/wp-content/uploads/2024/12/Camp-Wild-Mangar2.jpg";

const HeroHome = () => {
    return (
        <div id="HeroHomeGridContainer">

            {/* Faint background image */}
            <div className="BackgroundFadeImageContainer">
                <img src="https://cdn.pixabay.com/photo/2015/12/07/10/24/go-kart-1080492_1280.jpg" alt="" />
            </div>

            {/* ── 3 × 5 image grid ── */}
            <div className="GridRowsContainer">

                {/* Row 1 */}
                <div className="gridContainers">
                    <div></div>
                    <div className="hasImage">
                        <img src={img1} alt="adventure activity" />
                    </div>
                    <div></div>
                       <div></div>
                    <div></div>
                    <div className="hasImage">
                        <img src={img4} alt="reverse bungee" />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="gridContainers">
                    <div></div>
                    <div></div>
                    <div className="hasImage">
                        <img src={img2} alt="adventure activity" />
                    </div>
                    <div className="hasImage">
                        <img src={img5} alt="adventure activity" />
                    </div>
                    <div></div>
                    <div></div>
                </div>

                {/* Row 3 */}
                <div className="gridContainers">
                    <div className="hasImage">
                        <img src={img3} alt="adventure activity" />
                    </div>
                    <div></div>
                    <div></div>
                       <div></div>
                    <div className="hasImage">
                        <img src={img1} alt="adventure activity" />
                    </div>
                    <div></div>
                </div>

            </div>

            {/* ── Content overlay ── */}
            {/* <div className="HeroContentOverlay">
                <div className="HeroContent">
                    <h1 className="MainHeading text-center">
                        Thrills built for <br />
                        every <span className="HeroBrandWord">adventure</span>,<br />
                        every soul.
                    </h1>
                    <p className="HeroSubtext text-center">
                        Book zip-lining, bungee, camping &amp; more — all in one place.
                        Your next unforgettable story starts here.
                    </p>
                    <div className="HeroBtnGroup">
                        <Button variant="primary" id="hero-cta-primary">
                            Book Now
                        </Button>
                        <Button variant="secondary" id="hero-cta-secondary">
                            Explore Activities →
                        </Button>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default HeroHome;