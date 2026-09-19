
export default function Title({titlePhotoRef, title}){
    return (
        <div className="relative w-full">
            <img src={titlePhotoRef} className="w-full h-[45vh] md:h-auto object-cover"/>
            <div className="absolute top-0 w-full flex items-center">
                <h1 className="team-header text-white font-bold p-4 md:p-6 bg-black/50 m-4 md:m-8">
                    {title}
                </h1>
            </div>
        </div>
    )
}
