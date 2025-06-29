

export default function Headshot({photoRef, name, subsystem, email}){

    return (
        <div className="flex flex-col p-8">
            <img src={photoRef}/>
            <p className="pt-1 text-[#C00404] font-[SpaceGrotesk-Bold]">{name}</p>
            <p>{subsystem}</p>
            <a href={`mailto:${email}`}>{email}</a>
        </div>
    )
}