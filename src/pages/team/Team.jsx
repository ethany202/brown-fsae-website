import Title from "../../components/title/Title.jsx";
import teamBanner from '../../assets/images/team/brown-fsae-team-photo.jpg';
import headshotSample from '../../assets/images/team/headshot-sample.JPG';
import HeadshotSection from "../../components/headshot-section/HeadshotSection.jsx";
import chandlerHeadshot from '../../assets/images/team/headshots/chandler.jpg';
import jackHeadshot from '../../assets/images/team/headshots/jack.jpg';
import tristanHeadshot from '../../assets/images/team/headshots/tristan.jpg';

const headshots = import.meta.glob('../../assets/images/team/headshots/*.{jpg,JPG}', { eager: true });

const captainsMetadata = {
    headshotData: [
        {
            // photoRef: jackHeadshot, 
            file: "jack.jpg",
            name: "Jack Kolman", 
            subsystem: "Captain",
            email: "jack_kolman@brown.edu"
        },
        {
            file: "chandler.jpg",
            name: "Chandler Zhu", 
            subsystem: "Captain",
            email: "chandler_zhu@brown.edu"
        },
        {
            file: "tristan.jpg",
            name: "Tristan Keyser-Parker", 
            subsystem: "Captain",
            email: "tristan_keyser-parker@brown.edu"
        }
    ]
}

const structuresLeadsMetadata = {
    headshotData: [
        {
            file: "lake.jpg",
            name: "Lake Gifford", 
            subsystem: "Chassis",
            email: "patience_gifford@brown.edu" 
        },
        {
            file: "sophia.jpg",
            name: "Sophia Yim",
            subsystem: "Suspension",
            email: "sophia_yim@brown.edu"
        },
        {
            file: "karunmay.jpg",
            name: "Karunmay Aggarwal",
            subsystem: "Aerodynamics",
            email: "karunmay_aggarwal@brown.edu"
        },
        {
            file: "rehaan.jpg",
            name: "Rehaan Irani",
            subsystem: "Pedalbox",
            email: "rehaan_irani@brown.edu"
        },
        {
            file: "ethan.jpg",
            name: "Ethan Ye",
            subsystem: "Steering",
            email: "ethan_ye@brown.edu"
        },
        {
            file: "hailey.jpg",
            name: "Hailey Stone",
            subsystem: "Brakes",
            email: "hailey_stone@brown.edu"
        }
    ]
}

const powertrainLeadsMetadata = {
    headshotData: [
        {
            file: "carmelo.jpg", 
            name: "Carmelo Santoro", 
            subsystem: "Engine and Fuel",
            email: "claudio_santoro@brown.edu" 
        },
        {
            file: "luke.jpg",
            name: "Luke Rhoads",
            subsystem: "Intake and Dyno",
            email: "luke_rhoads@brown.edu"
        },
        {
            file: "celina.jpg",
            name: "Celina Bao",
            subsystem: "Exhaust",
            email: "baihe_bao@brown.edu"
        },
        {
            file: "baurice.jpg",
            name: "Baurice Kovatchev",
            subsystem: "Drivetrain",
            email: "baurice_kovatchev@brown.edu"
        },
        {
            file: "taohan.jpg",
            name: "Taohan Wang",
            subsystem: "Cooling",
            email: "taohan_wang@brown.edu"
        },
        {
            file: "ibrahim.JPG",
            name: "Ibrahim Mohammed",
            subsystem: "Shifting",
            email: "ibrahim_mohammed@brown.edu"
        }
    ]
}

const integrationLeadsMetadata = {
    headshotData: [
        {
            file: "jay.jpg", 
            name: "Electronics", 
            subsystem: "Jay O'Neill",
            email: "jay_j_oneill@brown.edu" 
        },
        {
            file: "ricky.JPG",
            name: "Eletronics",
            subsystem: "Ricky Ellison",
            email: "cedric_ellison@brown.edu"
        },
        {
            file: "chandler.jpg",
            name: "Leela Young",
            subsystem: "Ergonomics",
            email: "leela_young@brown.edu"
        },
        {
            file: "emelyn.jpg",
            name: "Emelyn Madrigal",
            subsystem: "Driver Interface",
            email: "emelyn_madrigal@brown.edu"
        }
    ]
}

export default function Team(){    

    const captainsInfo = {
        headshotData: captainsMetadata.headshotData.map(captainMetadata => ({
            ...captainMetadata,
            photoRef: headshots[`../../assets/images/team/headshots/${captainMetadata.file}`].default
        }))
    };

    const subsystemLeadsInfo = [
        {
            subsectionName: "Structures",
            headshotData: structuresLeadsMetadata.headshotData.map(leadMetadata => ({
                ...leadMetadata,
                photoRef: headshots[`../../assets/images/team/headshots/${leadMetadata.file}`].default
            }))
        },
        {
            subsectionName: "Powertrain",
            headshotData: powertrainLeadsMetadata.headshotData.map(leadMetadata => ({
                ...leadMetadata,
                photoRef: headshots[`../../assets/images/team/headshots/${leadMetadata.file}`].default
            }))
        },
        {
            subsectionName: "Integration",
            headshotData: integrationLeadsMetadata.headshotData.map(leadMetadata => ({
                ...leadMetadata,
                photoRef: headshots[`../../assets/images/team/headshots/${leadMetadata.file}`].default
            }))
        },
    ]

    // const captainsInfo = {
    //     headshotData: [
    //         {
    //             photoRef: jackHeadshot, 
    //             name: "Jack Kolman", 
    //             subsystem: "Captain",
    //             email: "jack_kolman@brown.edu"
    //         },
    //         {
    //             photoRef: chandlerHeadshot, 
    //             name: "Chandler Zhu", 
    //             subsystem: "Captain",
    //             email: "chandler_zhu@brown.edu"
    //         },
    //         {
    //             photoRef: tristanHeadshot, 
    //             name: "Tristan Keyser-Parker", 
    //             subsystem: "Captain",
    //             email: "tristan_keyser-parker@brown.edu"
    //         }
    //     ]
    // }

    // const subsystemLeadsInfo = [
    //     {
    //         subsectionName: "Structures",
    //         headshotData: [
    //             {
    //                 photoRef: headshotSample, 
    //                 name: "Lake Gifford", 
    //                 subsystem: "Chassis",
    //                 email: "patience_gifford@brown.edu" 
    //             },
    //             {
    //                 photoRef: headshotSample,
    //                 name: "Sophia Yim",
    //                 subsystem: "Suspension",
    //                 email: "sophia_yim@brown.edu"
    //             },
    //             {
    //                 photoRef: headshotSample,
    //                 name: "Karunmay Aggarwal",
    //                 subsystem: "Aerodynamics",
    //                 email: "karunmay_aggarwal@brown.edu"
    //             },
    //             {
    //                 photoRef: headshotSample,
    //                 name: "Rehaan Irani",
    //                 subsystem: "Pedalbox",
    //                 email: "rehaan_irani@brown.edu"
    //             },
    //             {
    //                 photoRef: headshotSample,
    //                 name: "Ethan Ye",
    //                 subsystem: "Steering",
    //                 email: "ethan_ye@brown.edu"
    //             },
    //             {
    //                 photoRef: headshotSample,
    //                 name: "Hailey Stone",
    //                 subsystem: "Brakes",
    //                 email: "hailey_stone@brown.edu"
    //             }
    //         ]
    //     },
    //     {
    //         subsectionName: "Powertrain",
    //         headshotData: [
    //             {
    //                 photoRef: headshotSample, 
    //                 name: "Carmelo Santoro", 
    //                 subsystem: "Engine and Fuel",
    //                 email: "claudio_santoro@brown.edu" 
    //             },
    //             {
    //                 photoRef: headshotSample,
    //                 name: "Luke Rhoads",
    //                 subsystem: "Intake and Dyno",
    //                 email: "luke_rhoads@brown.edu"
    //             },
    //             {
    //                 photoRef: headshotSample,
    //                 name: "Celina Bao",
    //                 subsystem: "Exhaust",
    //                 email: "baihe_bao@brown.edu"
    //             },
    //             {
    //                 photoRef: headshotSample,
    //                 name: "Baurice Kovatchev",
    //                 subsystem: "Drivetrain",
    //                 email: "baurice_kovatchev@brown.edu"
    //             },
    //             {
    //                 photoRef: headshotSample,
    //                 name: "Taohan Wang",
    //                 subsystem: "Cooling",
    //                 email: "taohan_wang@brown.edu"
    //             },
    //             {
    //                 photoRef: headshotSample,
    //                 name: "Ibrahim Mohammed",
    //                 subsystem: "Shifting",
    //                 email: "ibrahim_mohammed@brown.edu"
    //             }
    //         ]
    //     },
    //     {
    //         subsectionName: "Integration",
    //         headshotData: [
    //             {
    //                 photoRef: headshotSample, 
    //                 name: "Electronics", 
    //                 subsystem: "Jay O'Neill",
    //                 email: "jay_j_oneill@brown.edu" 
    //             },
    //             {
    //                 photoRef: headshotSample,
    //                 name: "Eletronics",
    //                 subsystem: "Ricky Ellison",
    //                 email: "cedric_ellison@brown.edu"
    //             },
    //             {
    //                 photoRef: headshotSample,
    //                 name: "Leela Young",
    //                 subsystem: "Ergonomics",
    //                 email: "leela_young@brown.edu"
    //             },
    //             {
    //                 photoRef: headshotSample,
    //                 name: "Emelyn Madrigal",
    //                 subsystem: "Driver Interface",
    //                 email: "emelyn_madrigal@brown.edu"
    //             }
    //         ]
    //     }
    // ]


    return (
        <>
            <Title titlePhotoRef={teamBanner} title={"Our Team"}/>

            <div className="w-7/8">
                <div className="py-8 flex flex-col">         
                    <h3 className="text-center text-5xl py-4 font-[Michroma-Regular]">Captains</h3>
                    <HeadshotSection
                        headshotData={captainsInfo.headshotData}
                        />

                    <h3 className="text-center text-5xl pt-4 pb-8 font-[Michroma-Regular]">Subsystem Leads</h3>
                    {subsystemLeadsInfo.map((subsection, idx) => {
                        return (
                            <HeadshotSection
                                key={idx}
                                subsectionName={subsection.subsectionName}
                                headshotData={subsection.headshotData}
                                />
                        )
                    })}
                </div>
            </div>
        </>
    )
}