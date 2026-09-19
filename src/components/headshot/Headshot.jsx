import './Headshot.css';

export default function Headshot({photoRef, name, subsystem, email}){

    return (
        <div className="flex flex-col p-4 md:p-8">
            {photoRef
                ? <img src={photoRef} alt={name} className="w-full aspect-[3/2] object-cover"/>
                : <div className="headshot-placeholder w-full aspect-[3/2]">Photo coming soon</div>}
            <p className="pt-1 text-[#C00404] font-[SpaceGrotesk-Bold]">{name}</p>
            <p>{subsystem}</p>
            {email && <a href={`mailto:${email}`} className="member-email break-all">{email}</a>}
        </div>
    )
}
