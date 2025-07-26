import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SubteamBlock({subteamName, subteamPhotos, subteamDesc, keySubsystems}){
    
    const carouselSettings = {
        dots: false,
        infinite: true,
        arrows: true,
        autoplaySpeed: 2000,
        variableWidth: false,
        adaptiveHeight: false,
        centerMode: true
    }

    return (
        <div className="py-6">
            <h3 className="text-center text-5xl py-4 font-[Michroma-Regular]">{subteamName}</h3>

            <Slider {...carouselSettings} className="w-3/4 max-w-screen-lg mx-auto py-4">
                {subteamPhotos.map((photoRef, idx) => {
                    return (
                        <div key={idx} className="px-4">
                            <img src={photoRef} className="w-full"/>
                        </div>
                    )
                })}
            </Slider>

            <p className="text-center py-6">{subteamDesc}</p>

            <div className="bg-[#a300008a] flex p-4">
                <p className="px-1 font-[SpaceGrotesk-Bold]">Key Subsystems: </p>
                <p className="px-1">
                    {keySubsystems.map((component, idx) => {
                        if(idx === keySubsystems.length - 1){
                            return (
                                <>
                                    {component}
                                </>
                            )
                        }
                        return (
                            <>
                                {component}, &nbsp;
                            </>
                        )
                    })}
                </p>
            </div>
        </div>
    )
}