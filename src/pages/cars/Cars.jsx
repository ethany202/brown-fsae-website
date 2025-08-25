import Title from "../../components/title/Title.jsx";
import carsBanner from "../../assets/images/cars/brown-fsae-cars-photo.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const importedCars = import.meta.glob('../../assets/images/cars/past-cars/*.{png,jpg,jpeg,svg}', { eager: true });

export default function Cars(){

    const carPhotos = Object.values(importedCars).map((mod) => mod.default).sort().reverse();
    const carMetadata = [
        { name: "Rhode Runner", year: 2025 },
        { name: "Rhode Rage", year: 2024 },
        { name: "Rainbow Rhode", year: 2023 },
        { name: "Riptide", year: 2022 },
        { name: "BFR-20", year: 2021 },
        { name: "Rhododendron", year: 2019 },
        { name: "McFaster-Carr", year: 2018 }
    ]

    const carouselSettings = {
        dots: false,
        infinite: true,
        arrows: true,
        autoplay: false,
        fade: true
    }

    return (
        <>
            <Title titlePhotoRef={carsBanner} title={"Past Cars"} />

            <div className="w-full">
                <div className="py-8 flex flex-col items-center justify-center">
                    <h1 className="!text-5xl font-[SpaceGrotesk-Bold] text-[#C00404] py-4">Our Cars. Our History</h1>
                    <p>
                        Take a look at how our cars have transformed over the years!
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="py-8 mb-4">
                    <Slider {...carouselSettings} className="w-full max-w-screen-lg mx-auto">
                        {carPhotos.map((photoRef, idx) => {
                            return (
                                <div key={idx} className="px-4">
                                    <img src={photoRef} className="w-full"/>
                                    <div className="absolute top-10 left-10 w-full flex items-center">
                                        <p className="bg-black/50 py-1 px-4">{carMetadata[idx].name} ({carMetadata[idx].year})</p>

                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>

        </>
    )
}