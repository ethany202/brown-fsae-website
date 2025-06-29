import Title from "../../components/title/Title.jsx";
import teamBanner from '../../assets/images/team/brown-fsae-running-photo.jpg';
import headshotSample from '../../assets/images/team/headshot-sample.JPG';
import HeadshotSection from "../../components/headshot-section/HeadshotSection.jsx";

export default function Team(){

    const teamSections = [
        "Captains",
        "Subsystem Leads"
    ]

    const headshotData = [
        [
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
                email: "tkp@brown.edu"
            }
        ],
        [
            {
                photoRef: headshotSample,
                name: "Sophia Yim",
                subsystem: "Suspension",
                email: "sophia_yim@brown.edu"
            },
            {
                photoRef: headshotSample,
                name: "Patience (Lake) Gifford",
                subsystem: "Chassis",
                email: "patience_gifford@brown.edu"
            },
            {
                photoRef: headshotSample,
                name: "Karunmay Aggarwal",
                subsystem: "Aerodynamics",
                email: "karunmay_aggarwal@brown.edu"
            },
            {
                photoRef: headshotSample,
                name: "Johanna Nguyen",
                subsystem: "Dashboard",
                email: "johanna_nguyen@brown.edu"
            }
        ]
    ]

    return (
        <>
            <Title titlePhotoRef={teamBanner} title={"Our Team"}/>

            <div className="w-3/4">
                <div className="py-8 flex flex-col">
                    {teamSections.map((sectionName, idx) => {
                        return (
                            <HeadshotSection
                                sectionName={sectionName}
                                headshotData={headshotData[idx]}
                                />
                        )
                    })}
                </div>
            </div>
        </>
    )
}