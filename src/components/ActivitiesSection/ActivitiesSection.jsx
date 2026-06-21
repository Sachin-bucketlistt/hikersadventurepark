import React, { useState } from "react";
import { Modal } from "antd";
import "./ActivitiesSection.css";
import { activities, categories } from "./activitiesData";
import Button from "../common/Button/Button";

const ActivitiesSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [visibleCount, setVisibleCount] = useState(10);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState(null);

    const filteredActivities = activeCategory === "All"
        ? activities
        : activities.filter(act => act.category === activeCategory);

    const displayedActivities = filteredActivities.slice(0, visibleCount);

    const getColumnsCount = () => {
        if (typeof window === "undefined") return 5;
        if (window.innerWidth >= 1400) return 5;
        if (window.innerWidth >= 1100) return 4;
        if (window.innerWidth >= 800) return 3;
        return 2;
    };

    const handleLoadMore = () => {
        const cols = getColumnsCount();
        setVisibleCount(prev => prev + cols);
    };

    return (
        <section id="ActivitiesSection">

            {/* ── Section Header ── */}
            <div className="ActHeader">
                {/* <p className="ActEyebrow">What We Offer</p> */}
                <h2 className="SectionHeading">
                    Adventures <span className="accent">crafted</span> for<br />
                    every <span className="accent">seeker</span>.
                </h2>
                <p className="ActSubtext">
                    From high-altitude thrills to quiet forest nights — find the experience
                    that matches your spirit.
                </p>
            </div>

            {/* ── Category Tabs ── */}
            {/* <div className="ActTabs">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`ActTabBtn ${activeCategory === cat ? "active" : ""}`}
                        onClick={() => {
                            setActiveCategory(cat);
                            setVisibleCount(10);
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div> */}

            {/* ── Cards Grid ── */}
            <div className="ActGrid">
                {displayedActivities.map((act) => (
                    <div className="ActCard" key={`${act.id}-${activeCategory}`}>

                        {/* Image container with corner brackets */}
                        <div className="ActCardImageWrap">
                            <img src={act.image} alt={act.title} loading="lazy" />
                        </div>

                        {/* Text content */}
                        <div className="ActCardBody">
                            <h3 className="ActCardTitle">{act.title}</h3>
                            <p className="ActCardDesc">{act.description}</p>
                            <Button
                                tag="button"
                                onClick={() => {
                                    setSelectedActivity(act);
                                    setIsModalOpen(true);
                                }}
                                variant="primary"
                                className="ActBookBtn"
                            >
                                Book Now
                            </Button>
                        </div>

                    </div>
                ))}
            </div>

            {/* ── Load More Button ── */}
            {filteredActivities.length > visibleCount && (
                <div className="ActLoadMoreWrap">
                    <Button
                        variant="secondary"
                        onClick={handleLoadMore}
                        className="ActLoadMoreBtn"
                    >
                        Load More
                    </Button>
                </div>
            )}

            {/* ── Booking Modal with Iframe ── */}
            <Modal
                title={selectedActivity ? `Book ${selectedActivity.title}` : "Book Activity"}
                open={isModalOpen}
                onCancel={() => {
                    setIsModalOpen(false);
                    setSelectedActivity(null);
                }}
                footer={null}
                width={1000}
                centered
                className="theme-custom-modal"
                destroyOnClose
            >
                <iframe
                    src="https://okghumo.com/hap-hikers-adventure-park"
                    title="Book Hikers Adventure Park"
                    className="book-iframe"
                />
            </Modal>

        </section>
    );
};

export default ActivitiesSection;
