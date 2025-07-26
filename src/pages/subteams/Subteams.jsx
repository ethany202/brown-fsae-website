import React from 'react';
import subteamBanner from '../../assets/images/subteams/brown-subteam-banner.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SubteamBlock from '../../components/subteam-block/SubteamBlock.jsx';
import Title from '../../components/title/Title.jsx';

export default function Subteams(){
 
    const pullStructuresImages = () => {
        const images = import.meta.glob('../../assets/images/subteams/structures/*', { eager: true });
        const urls = Object.values(images).map((mod) => mod.default);
        return urls
    }

    const pullPowertrainImages = () => {
        const images = import.meta.glob('../../assets/images/subteams/powertrain/*', { eager: true });
        const urls = Object.values(images).map((mod) => mod.default);
        return urls
    }

    const pullIntegrationImages = () => {
        const images = import.meta.glob('../../assets/images/subteams/integration/*', { eager: true });
        const urls = Object.values(images).map((mod) => mod.default);
        return urls
    }

    const subteamData = [
        {
            subteamName: "Structures",
            subteamPhotos: pullStructuresImages(),
            subteamDesc: "Structures embodies all parts of the car that are involved with the car's movement and handling. This includes the car's ability to steer, brake, and handle external forces. Want to learn how the car moves in different directions? Check out this subteam!",
            keySubsystems: ["Chassis", "Aerodynamics", "Suspension", "Steering", "Pedalbox", "Brakes"]
        },
        {
            subteamName: "Powertrain",
            subteamPhotos: pullPowertrainImages(),
            subteamDesc: "Powertrain corresponds to components of the car responsible for the transfer of power from the car's engine to its wheels. Interested in how our car flies on the track? Then this is the subteam for you!",
            keySubsystems: ["Engine", "Fuel", "Intake", "Exhaust", "Drivetrain", "Cooling", "Shifting"]
        },
        {
            subteamName: "Integration",
            subteamPhotos: pullIntegrationImages(),
            subteamDesc: "Integration consists of all the operational parts of the car. This includes subsystems that involve multiple other components of the car and enable them to work together seamlessly.",
            keySubsystems: ["Eletronics", "Ergonomics", "Driver Interface", "Testing"]
        },

    ];

    return (
        <>
            <Title titlePhotoRef={subteamBanner} title={"Core Subteams"}/>

            <div className="w-3/4">
                <div className="py-8 flex flex-col">
                    {subteamData.map((sub, idx) => {
                        return (
                            <SubteamBlock 
                                key={idx} 
                                subteamName={sub.subteamName} 
                                subteamPhotos={sub.subteamPhotos} 
                                subteamDesc={sub.subteamDesc}
                                keySubsystems={sub.keySubsystems}/>
                        )
                    })}

                </div>
            </div>
        </>
    )
}