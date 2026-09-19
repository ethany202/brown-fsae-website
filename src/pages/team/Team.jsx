import Title from "../../components/title/Title.jsx";
import teamBanner from '../../assets/images/team/brown-fsae-team-photo.jpg';
import HeadshotSection from "../../components/headshot-section/HeadshotSection.jsx";

const headshots = import.meta.glob('../../assets/images/team/headshots/*.{jpg,JPG}', { eager: true });

const captainsMetadata = {
    headshotData: [
        {
            file: "lake.jpg",
            name: "Lake Gifford",
            subsystem: "Captain",
            email: "patience_gifford@brown.edu"
        },
        {
            file: "carmelo.jpg",
            name: "Carmelo Santoro",
            subsystem: "Captain",
            email: "claudio_santoro@brown.edu"
        },
        {
            file: "sophia.jpg",
            name: "Sophia Yim",
            subsystem: "Captain",
            email: "sophia_yim@brown.edu"
        }
    ]
}

const structuresLeadsMetadata = {
    headshotData: [
        {
            file: "hailey.jpg",
            name: "Hailey Stone",
            subsystem: "Chassis",
            email: "hailey_stone@brown.edu"
        },
        {
            file: "karunmay.jpg",
            name: "Karunmay Aggarwal",
            subsystem: "Suspension",
            email: "karunmay_aggarwal@brown.edu"
        },
        {
            file: "ethan.jpg",
            name: "Ethan Ye",
            subsystem: "Suspension",
            email: "ethan_ye@brown.edu"
        },
        {
            file: "mariam.jpg",
            name: "Mariam Sufi",
            subsystem: "Suspension + Business",
            email: "mariam_sufi@brown.edu"
        },
        {
            file: "aksel.jpg",
            name: "Aksel Salmi",
            subsystem: "Suspension",
            email: "aksel_salmi@brown.edu"
        },
        {
            file: "henry.jpg",
            name: "Henry Shattuck",
            subsystem: "Aerodynamics",
            email: "henry_shattuck@brown.edu"
        },
        {
            file: "chase.jpg",
            name: "Chase Brown",
            subsystem: "Aerodynamics",
            email: "chase_brown@brown.edu"
        },
        {
            file: "grace.jpg",
            name: "Grace Hong",
            subsystem: "Pedalbox",
            email: "grace_hong@brown.edu"
        },
        {
            file: "luisa.jpg",
            name: "Luisa Buss",
            subsystem: "Brakes",
            email: "luisa_buss@brown.edu"
        },
        {
            file: "devon.jpg",
            name: "Devon Ntiforo",
            subsystem: "Composites",
            email: "devon_ntiforo@brown.edu"
        },
        {
            file: "pawel.jpg",
            name: "Pawel Odziomek",
            subsystem: "Composites",
            email: "pawel_odziomek@brown.edu"
        },
        {
            file: "esther.jpg",
            name: "Esther Nam",
            subsystem: "Steering",
            email: "esther_nam@brown.edu"
        },
        {
            file: "chiagoziem.jpg",
            name: "Chiagoziem Ikeyi",
            subsystem: "Steering",
            email: "chiagoziem_ikeyi@brown.edu"
        },
        {
            file: "natasha.jpg",
            name: "Natasha Ng",
            subsystem: "Ergonomics",
            email: "natasha_ng@brown.edu"
        },
        {
            file: "katelyn.jpg",
            name: "Katelyn Guo",
            subsystem: "Ergonomics",
            email: "katelyn_guo@brown.edu"
        },
        {
            file: "eshan.jpg",
            name: "Eshan Alam",
            subsystem: "Ergonomics",
            email: "eshan_alam@brown.edu"
        },
        {
            file: "diego.jpg",
            name: "Diego Perez Saignac",
            subsystem: "Welding",
            email: "diego_perez_saignac@brown.edu"
        },
        {
            file: "zachary.jpg",
            name: "Zachary Yuan",
            subsystem: "Vehicle Dynamics",
            email: "zachary_yuan1@brown.edu"
        },
        {
            file: "taohan.jpg",
            name: "Taohan Wang",
            subsystem: "Aerodynamics",
            email: "taohan_wang@brown.edu"
        }
    ]
}

const powertrainLeadsMetadata = {
    headshotData: [
        {
            file: "luke.jpg",
            name: "Luke Rhoads",
            subsystem: "Powertrain",
            email: "luke_rhoads@brown.edu"
        },
        {
            file: "baurice.jpg",
            name: "Baurice Kovatchev",
            subsystem: "Electronics",
            email: "baurice_kovatchev@brown.edu"
        },
        {
            file: "eduardo.jpg",
            name: "Eduardo Martinez",
            subsystem: "Cooling",
            email: "eduardo_martinez@brown.edu"
        },
        {
            file: "koray.jpg",
            name: "Koray Kokturk",
            subsystem: "Shifting + Intake",
            email: "koray_kokturk@brown.edu"
        },
        {
            file: "karen.jpg",
            name: "Karen Zhang",
            subsystem: "Exhaust",
            email: "karen_m_zhang@brown.edu"
        },
        {
            file: "isabella.jpg",
            name: "Isabella Popescu",
            subsystem: "Drivetrain",
            email: "isabella_popescu@brown.edu"
        },
        {
            file: "jodie.jpg",
            name: "Jodie Yan",
            subsystem: "Drivetrain",
            email: "jodie_yan@brown.edu"
        }
    ]
}

// set to true once the new headshots are in
const SHOW_PHOTOS = true;

// returns null when no photo yet, headshot shows a placeholder
const getPhoto = (file) => SHOW_PHOTOS && file ? headshots[`../../assets/images/team/headshots/${file}`]?.default ?? null : null;

export default function Team(){    

    const captainsInfo = {
        headshotData: captainsMetadata.headshotData.map(captainMetadata => ({
            ...captainMetadata,
            photoRef: getPhoto(captainMetadata.file)
        }))
    };

    const subsystemLeadsInfo = [
        {
            subsectionName: "Structures",
            headshotData: structuresLeadsMetadata.headshotData.map(leadMetadata => ({
                ...leadMetadata,
                photoRef: getPhoto(leadMetadata.file)
            }))
        },
        {
            subsectionName: "Powertrain",
            headshotData: powertrainLeadsMetadata.headshotData.map(leadMetadata => ({
                ...leadMetadata,
                photoRef: getPhoto(leadMetadata.file)
            }))
        },
    ]



    return (
        <>
            <Title titlePhotoRef={teamBanner} title={"Our Team"}/>

            <div className="w-11/12 md:w-7/8">
                <div className="py-8 flex flex-col">         
                    <h3 className="text-center text-3xl md:text-5xl py-4 font-[Michroma-Regular]">Captains</h3>
                    <HeadshotSection
                        headshotData={captainsInfo.headshotData}
                        />

                    <h3 className="text-center text-3xl md:text-5xl pt-4 pb-8 font-[Michroma-Regular]">Subsystem Leads</h3>
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