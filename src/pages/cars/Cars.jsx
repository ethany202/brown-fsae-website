import Title from "../../components/title/Title.jsx";
import carsBanner from "../../assets/images/cars/brown-fsae-cars-photo.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const importedCars = import.meta.glob('../../assets/images/cars/past-cars/*.{png,jpg,jpeg}', { eager: true });
const carPhoto = (year) => Object.entries(importedCars).find(([path]) => path.includes(`-${year}-car.`))?.[1].default;

// newest first, photo is picked by year from the file name
const cars = [
    { name: "Ever True", year: 2026 },
    { name: "Rhode Runner", year: 2025 },
    { name: "Rhode Rage", year: 2024 },
    { name: "Rainbow Rhode", year: 2023 },
    { name: "Riptide", year: 2022 },
    { name: "BFR-20", year: 2020 },
    { name: "Rhododendron", year: 2019 },
    { name: "McFaster-Carr", year: 2018 }
].map((car) => ({ ...car, photo: carPhoto(car.year) })).filter((car) => car.photo);

export default function Cars(){

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
                    <h1 className="!text-3xl md:!text-5xl text-center font-[SpaceGrotesk-Bold] text-[#C00404] py-4">Our Cars. Our History</h1>
                    <p className="text-center px-4">
                        Take a look at how our cars have transformed over the years!
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="py-8 mb-4 w-11/12 md:w-full max-w-screen-lg">
                    <Slider {...carouselSettings} className="w-full max-w-screen-lg mx-auto">
                        {cars.map((car) => {
                            return (
                                <div key={car.year} className="px-4 relative">
                                    <img src={car.photo} className="w-full" alt={`${car.name} (${car.year})`}/>
                                    <div className="absolute top-3 left-7 md:top-10 md:left-10 flex items-center">
                                        <p className="bg-black/50 py-1 px-4">{car.name} ({car.year})</p>
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