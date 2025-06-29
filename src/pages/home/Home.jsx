import React from "react";
import "./Home.css";
import carFrontView from "../../assets/images/home/brown-fsae-car-front-view.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import groupPhoto from '../../assets/images/home/group-photo.jpg';
import liftingPhoto from '../../assets/images/home/lifting-photo.jpg';
import seniorsPhoto from '../../assets/images/home/seniors-photo.jpg';
import EventPlacements from "../../components/event-placements/EventPlacements.jsx";
import Title from "../../components/title/Title.jsx";

export default function Home(){

    const carouselSettings = {
        dots: false,
        infinite: true,
        arrows: true,
        autoplaySpeed: 2000,
    }

    const carouselPhotos = [
        groupPhoto,
        liftingPhoto,
        seniorsPhoto
    ]

    return (
        <>
            <Title titlePhotoRef={carFrontView} title={"Brown \n Formula \n Racing"}/>
            <div className="w-3/4">
                <div className="py-8">
                    <p>
                        Welcome to Brown Formula Racing, Brown University's premier design and build team. 
                        Our goal is to develop and race the generation of a formula-style racecar for FSAE Michigan, 
                        the largest collegiate engineering and racing competition of its kind in North America. 
                        We pride ourselves on running a team where anyone can join and learn regardless of experience or academic concentration. 
                        In fact, the majority of our members have never used the tools or software we employ before joining our team. 
                        This makes the learning experience all the more valuable.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center py-4">
                    <h1 className="car-name py-4">Rhode Runner (P18)</h1>
                    <Slider {...carouselSettings} className="w-full max-w-screen-lg mx-auto">
                        {carouselPhotos.map((photoRef, idx) => {
                            return (
                                <div key={idx} className="px-4">
                                    <img src={photoRef} className="w-full"/>
                                </div>
                            )
                        })}
                    </Slider>
                    <EventPlacements/>
                    <div className="py-8">
                        <p>
                            Under our most recent showing at FSAE Michigan 2025, we placed top 20 overall (18th place)
                            out of 120 university teams. This includes a top 5 finish in the Cost event and a top 10 finish in Endurance.
                            Our performance is a remarkable feat and one to leave in the history books of Brown Formula Racing, as we pursue even 
                            greater achievements in the near future.
                        </p>
                    </div>
                </div>
                
            </div>
        </>
    )
}