import Title from "../../components/title/Title";
import mediaBanner from '../../assets/images/media/brown-fsae-media-photo.jpg';
import season2425Thumbnail from '../../assets/images/media/24-25-thumbnail.jpg';
import SeasonalPhotos from "../../components/seasonal-photos/SeasonalPhotos";

export default function Media(){

    const seasonalPhotos = [
        {
            year: "2024-25 Photo Album",
            thumbnail: season2425Thumbnail,
            albumRef: "https://photos.google.com/share/AF1QipOW2HhxKhoxFbaj_85HUmvW5TGrXnxZo5jYFQkosleVImezNq9EGPMJPRyKT0859g?key=dHR6XzJKV1drSXhid0R5NEhaYTBySVU0RDUwVTRB"
        },
        {
            year: "2023-24 Photo Album",
            thumbnail: season2425Thumbnail,
            albumRef: "https://photos.google.com/share/AF1QipOW2HhxKhoxFbaj_85HUmvW5TGrXnxZo5jYFQkosleVImezNq9EGPMJPRyKT0859g?key=dHR6XzJKV1drSXhid0R5NEhaYTBySVU0RDUwVTRB"
        }
    ]

    return (
        <>
            <Title titlePhotoRef={mediaBanner} title={"Media"}/>

            <div className="py-8 w-full flex flex-col items-center justify-center">
                <h1 className="font-[SpaceGrotesk-Bold] py-4">Video Highlights</h1>
                <h2 className="text-2xl py-2">Tedward Drivers Rhode Rage</h2>
                <div className="w-1/2 aspect-video my-2">
                    <iframe 
                        src="https://www.youtube.com/embed/TbRV1o7XjyQ?autoplay=1&origin=http://example.com"
                        className="w-full h-full"
                        allowFullScreen
                        />
                </div>

                <div className="album-media py-8 grid grid-cols-2 gap-16 w-3/4">
                    {seasonalPhotos.map((albumData, idx) => {
                        return (
                            <SeasonalPhotos
                                year={albumData.year}
                                thumbnail={albumData.thumbnail}
                                albumRef={albumData.albumRef}
                                key={idx}
                                />
                        )
                    })}
                </div>
            </div>
            
           
        </>
    )
}