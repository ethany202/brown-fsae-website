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

                <div className="flex flex-col py-8 w-full">
                    <h1 className="py-4 bg-[#a300008a] w-full flex flex-col items-center justify-center font-[SpaceGrotesk-Bold]">What Would You Learn?</h1>
                    <div className="learn-section py-4 grid grid-cols-2">
                        <ul className="list-disc list-inside space-y-2 p-6">
                            <li>Machining metal components</li>
                            <li>Welding</li>
                            <li>Computer aided design (CAD)</li>
                        </ul>
                        <ul className="list-disc list-inside space-y-2 p-6">
                            <li>Computer simulation</li>
                            <li>Carbon fiber fabrication</li>
                            <li>General design and testing</li>
                        </ul>
                    </div>

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
                            Rhode Runner marks the first step in the new era for Brown Formula Racing. At just 
                            <strong className="font-[SpaceGrotesk-Bold]"> 200 kilograms </strong> 
                            - 33 kg lighter than its predecessor - Rhode Runner is the result of over a year of focused design, iteration, and validation. 
                            Nearly every subsystem was overhauled and freshly manufactured in-house, including a 
                            <strong className="font-[SpaceGrotesk-Bold]"> custom CP1 titanium exhaust,  
                            hollow clamshell airfoils, mode-decoupled front and rear suspension, and structural carbon fiber floor</strong>. 
                            Placing 
                            <strong className="font-[SpaceGrotesk-Bold]"> 18th overall, </strong> 
                            Rhode Runner's performance ushers in a new era of Brown Formula Racing - with hardware on the horizon.
                        </p>
                    </div>
                </div>
                
            </div>
        </>
    )
}