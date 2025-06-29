
export default function Title({titlePhotoRef, title}){
    return (
        <>
            <img src={titlePhotoRef} className="w-full object-cover"/>
            <div className="absolute top-0 w-full pt-20 flex items-center">
                <h1 className="team-header text-white font-bold p-6 bg-black/50 m-8">
                    {title}
                </h1>
            </div>
        </>
    )
}