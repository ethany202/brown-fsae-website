import React from 'react';
import subsystemBanner from '../../assets/images/subsystems/brown-subsystem-banner.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tempPhoto from '../../assets/images/subsystems/brown-subsystem-banner.jpg';
import otherPhoto from '../../assets/images/home/brown-fsae-car-front-view.jpg';
import SubsystemBlock from '../../components/subsystem-block/SubsystemBlock.jsx';
import Title from '../../components/title/Title.jsx';

export default function Subsystems(){

    const subsystemData = [
        {
            subsystemName: "Aerodynamics",
            subsystemPhotos: [tempPhoto, otherPhoto],
            subsystemDesc: "Aerodynamics generates downforce",
            keyComponents: ["front wing", "rear wing", "sidepods", "body"]
        },
        {
            subsystemName: "Vehicle Dynamics",
            subsystemPhotos: [tempPhoto, otherPhoto],
            subsystemDesc: "Embodies all parts of the car that are involved with the car's movement",
            keyComponents: ["suspension", "steering", "tires", "pedalbox"]
        },
        {
            subsystemName: "Electrical",
            subsystemPhotos: [tempPhoto, otherPhoto],
            subsystemDesc: "Consists of all parts of the car that deals with circuitry",
            keyComponents: ["dashboard", "ecu", "sensors"]
        },
        {
            subsystemName: "Powertrain",
            subsystemPhotos: [tempPhoto, otherPhoto],
            subsystemDesc: "Corresponds to components of the car responsible for the transfer of power from the car's engine to its wheels",
            keyComponents: ["Engine, drivetrain, fuel"]
        }
    ];

    return (
        <>
            <Title titlePhotoRef={subsystemBanner} title={"Subsystems"}/>

            <div className="w-3/4">
                <div className="py-8 flex flex-col">
                    {subsystemData.map((sub, idx) => {
                        return (
                            <SubsystemBlock 
                                key={idx} 
                                subsystemName={sub.subsystemName} 
                                subsystemPhotos={sub.subsystemPhotos} 
                                subsystemDesc={sub.subsystemDesc}
                                keyComponents={sub.keyComponents}/>
                        )
                    })}

                </div>
            </div>
        </>
    )
}