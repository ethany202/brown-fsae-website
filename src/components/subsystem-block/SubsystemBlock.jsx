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

            <Slider {...carouselSettings} className="w-10/12 md:w-3/4 max-w-screen-lg mx-auto py-4">
                {subsystemPhotos.map((photoRef, idx) => {
                    return (
                        <div key={idx} className="px-4">
                            <img src={photoRef} className="w-full" alt={`${subsystemName} subsystem`} loading="lazy"/>
                        </div>
                    )
                })}
            </Slider>

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