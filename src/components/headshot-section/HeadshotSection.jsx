import Headshot from "../headshot/Headshot.jsx";

export default function HeadshotSection({subsectionName, headshotData}){
    return (
        <div className="flex flex-col items-center justify-center">
            {subsectionName && <h4 className="text-center text-2xl pt-8 pb-2 font-[Michroma-Regular]">{subsectionName}</h4>}

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