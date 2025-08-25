import Title from "../../components/title/Title.jsx";
import mediaBanner from '../../assets/images/media/brown-fsae-media-photo.jpg';
import season2425Thumbnail from '../../assets/images/media/24-25-thumbnail.jpg';
import SeasonalPhotos from "../../components/seasonal-photos/SeasonalPhotos.jsx";

export default function Media(){

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
            </div>
            
           
        </>
    )
}