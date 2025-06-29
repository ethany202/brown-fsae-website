import Headshot from "../headshot/Headshot.jsx";

export default function HeadshotSection({sectionName, headshotData}){
    return (
        <div className="flex flex-col items-center justify-center">
            <h3 className="text-center text-5xl py-4 font-[Michroma-Regular]">{sectionName}</h3>

            <div className="grid grid-cols-3">
                {headshotData && headshotData.map((singleHeadshot, idx) => {
                    return (
                        <Headshot
                            key={idx}
                            photoRef={singleHeadshot.photoRef}
                            name={singleHeadshot.name}
                            subsystem={singleHeadshot.subsystem}
                            email={singleHeadshot.email}
                            />
                    )
                })}
            </div>
        </div>
    )
}