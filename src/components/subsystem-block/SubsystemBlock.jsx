import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SubsystemBlock({subsystemName, subsystemPhotos, subsystemDesc, keySubsystems}){
    
    const carouselSettings = {
        dots: false,
        infinite: true,
        arrows: true,
        autoplaySpeed: 2000,
        variableWidth: false,
        adaptiveHeight: false,
        centerMode: true,
        responsive: [{ breakpoint: 768, settings: { centerMode: false } }]
    }

    return (
        <div className="py-6">
            <h3 className="text-center text-3xl md:text-5xl py-4 font-[Michroma-Regular]">{subsystemName}</h3>

            {subsystemPhotos.length > 1 ? (
                <Slider {...carouselSettings} className="w-10/12 md:w-3/4 max-w-screen-lg mx-auto py-4">
                    {subsystemPhotos.map((photoRef, idx) => {
                        return (
                            <div key={idx} className="px-4">
                                <img src={photoRef} className="w-full aspect-[3/2] object-cover" alt={`${subsystemName} subsystem`} loading="lazy"/>
                            </div>
                        )
                    })}
                </Slider>
            ) : (
                // single photo, skip the slider so slick doesn't clone it
                <div className="w-10/12 md:w-1/2 max-w-screen-lg mx-auto py-4">
                    <img src={subsystemPhotos[0]} className="w-full aspect-[3/2] object-cover" alt={`${subsystemName} subsystem`} loading="lazy"/>
                </div>
            )}

            <p className="text-center py-6">{subsystemDesc}</p>

            <div className="bg-[#a300008a] flex flex-col md:flex-row p-4">
                <p className="px-1 font-[SpaceGrotesk-Bold]">Key Subsystems: </p>
                <p className="px-1">
                    {keySubsystems.join(", ")}
                </p>
            </div>
        </div>
    )
}