import Title from "../../components/title/Title.jsx";
import teamBanner from '../../assets/images/team/brown-fsae-team-photo.jpg';
import headshotSample from '../../assets/images/team/headshot-sample.JPG';
import HeadshotSection from "../../components/headshot-section/HeadshotSection.jsx";

export default function Team(){

    const captainsInfo = {
        headshotData: [
            {
                photoRef: headshotSample, 
                name: "Jack Kolman", 
                subsystem: "Captain",
                email: "jack_kolman@brown.edu"
            },
            {
                photoRef: headshotSample, 
                name: "Chandler Zhu", 
                subsystem: "Captain",
                email: "chandler_zhu@brown.edu"
            },
            {
                photoRef: headshotSample, 
                name: "Tristan Keyser-Parker", 
                subsystem: "Captain",
                email: "tristan_keyser-parker@brown.edu"
            }
        ]
    }

    const subsystemLeadsInfo = [
        {
            subsectionName: "Structures",
            headshotData: [
                {
                    photoRef: headshotSample, 
                    name: "Lake Gifford", 
                    subsystem: "Chassis",
                    email: "patience_gifford@brown.edu" 
                },
                {
                    photoRef: headshotSample,
                    name: "Sophia Yim",
                    subsystem: "Suspension",
                    email: "sophia_yim@brown.edu"
                },
                {
                    photoRef: headshotSample,
                    name: "Karunmay Aggarwal",
                    subsystem: "Aerodynamics",
                    email: "karunmay_aggarwal@brown.edu"
                },
                {
                    photoRef: headshotSample,
                    name: "Rehaan Irani",
                    subsystem: "Pedalbox",
                    email: "rehaan_irani@brown.edu"
                },
                {
                    photoRef: headshotSample,
                    name: "Ethan Ye",
                    subsystem: "Steering",
                    email: "ethan_ye@brown.edu"
                },
                {
                    photoRef: headshotSample,
                    name: "Hailey Stone",
                    subsystem: "Brakes",
                    email: "hailey_stone@brown.edu"
                }
            ]
        },
        {
            subsectionName: "Powertrain",
            headshotData: [
                {
                    photoRef: headshotSample, 
                    name: "Carmelo Santoro", 
                    subsystem: "Engine and Fuel",
                    email: "claudio_santoro@brown.edu" 
                },
                {
                    photoRef: headshotSample,
                    name: "Luke Rhoads",
                    subsystem: "Intake and Dyno",
                    email: "luke_rhoads@brown.edu"
                },
                {
                    photoRef: headshotSample,
                    name: "Celina Bao",
                    subsystem: "Exhaust",
                    email: "baihe_bao@brown.edu"
                },
                {
                    photoRef: headshotSample,
                    name: "Baurice Kovatchev",
                    subsystem: "Drivetrain",
                    email: "baurice_kovatchev@brown.edu"
                },
                {
                    photoRef: headshotSample,
                    name: "Taohan Wang",
                    subsystem: "Cooling",
                    email: "taohan_wang@brown.edu"
                },
                {
                    photoRef: headshotSample,
                    name: "Ibrahim Mohammed",
                    subsystem: "Shifting",
                    email: "ibrahim_mohammed@brown.edu"
                }
            ]
        },
        {
            subsectionName: "Integration",
            headshotData: [
                {
                    photoRef: headshotSample, 
                    name: "Electronics", 
                    subsystem: "Jay O'Neill",
                    email: "<name>@brown.edu" 
                },
                {
                    photoRef: headshotSample,
                    name: "Eletronics",
                    subsystem: "Ricky Ellison",
                    email: "cedric_ellison@brown.edu"
                },
                {
                    photoRef: headshotSample,
                    name: "Leela Young",
                    subsystem: "Ergonomics",
                    email: "leela_young@brown.edu"
                },
                {
                    photoRef: headshotSample,
                    name: "Emelyn Madrigal",
                    subsystem: "Driver Interface",
                    email: "emelyn_madrigal@brown.edu"
                },
                {
                    photoRef: headshotSample,
                    name: "Johanna Nguyen",
                    subsystem: "Driver Interface",
                    email: "johanna_nguyen@brown.edu"
                }
            ]
        }
    ]


    return (
        <>
            <Title titlePhotoRef={teamBanner} title={"Our Team"}/>

            <div className="w-3/4">
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