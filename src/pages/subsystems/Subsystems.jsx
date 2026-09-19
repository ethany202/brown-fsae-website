import React from 'react';
import subsystemBanner from '../../assets/images/subsystems/brown-subsystem-banner.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SubsystemBlock from '../../components/subsystem-block/SubsystemBlock.jsx';
import Title from '../../components/title/Title.jsx';

export default function Subsystems(){
 
    const pullStructuresImages = () => {
        const images = import.meta.glob('../../assets/images/subsystems/structures/*', { eager: true });
        const urls = Object.values(images).map((mod) => mod.default);
        return urls
    }

    const pullPowertrainImages = () => {
        const images = import.meta.glob('../../assets/images/subsystems/powertrain/*', { eager: true });
        const urls = Object.values(images).map((mod) => mod.default);
        return urls
    }

    const pullIntegrationImages = () => {
        const images = import.meta.glob('../../assets/images/subsystems/integration/*', { eager: true });
        const urls = Object.values(images).map((mod) => mod.default);
        return urls
    }

    const subsystemData = [
        {
            subsystemName: "Structures",
            subsystemPhotos: pullStructuresImages(),
            subsystemDesc: "Structures embodies all parts of the car that are involved with the car's movement and handling. This includes the car's ability to steer, brake, and handle external forces. Want to learn how the car moves in different directions? Check out this subsystem!",
            keySubsystems: ["Chassis", "Aerodynamics", "Suspension", "Steering", "Pedalbox", "Brakes"]
        },
        {
            subsystemName: "Powertrain",
            subsystemPhotos: pullPowertrainImages(),
            subsystemDesc: "Powertrain corresponds to components of the car responsible for the transfer of power from the car's engine to its wheels. Interested in how our car flies on the track? Then this is the subsystem for you!",
            keySubsystems: ["Engine", "Fuel", "Intake", "Exhaust", "Drivetrain", "Cooling", "Shifting"]
        },
        {
            subsystemName: "Integration",
            subsystemPhotos: pullIntegrationImages(),
            subsystemDesc: "Integration consists of all the operational parts of the car. This includes subsystems that involve multiple other components of the car and enable them to work together seamlessly.",
            keySubsystems: ["Electronics", "Ergonomics", "Driver Interface", "Testing"]
        },

    ];

    return (
        <>
            <Title titlePhotoRef={subsystemBanner} title={"Core Subsystems"}/>

            <div className="w-11/12 md:w-3/4">
                <div className="py-8 flex flex-col">
                    {subsystemData.map((sub, idx) => {
                        return (
                            <SubsystemBlock 
                                key={idx} 
                                subsystemName={sub.subsystemName} 
                                subsystemPhotos={sub.subsystemPhotos} 
                                subsystemDesc={sub.subsystemDesc}
                                keySubsystems={sub.keySubsystems}/>
                        )
                    })}

                </div>
            </div>
        </>
    )
}