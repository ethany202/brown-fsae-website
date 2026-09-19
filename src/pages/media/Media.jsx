import Title from "../../components/title/Title.jsx";
import mediaBanner from '../../assets/images/media/brown-fsae-media-photo.jpg';

export default function Media(){

    return (
        <>
            <Title titlePhotoRef={mediaBanner} title={"Media"}/>

            <div className="py-8 w-full flex flex-col items-center justify-center">
                <h1 className="font-[SpaceGrotesk-Bold] py-4">Video Highlights</h1>
                <h2 className="text-xl md:text-2xl py-2 px-4 text-center">Tedward Drives Rhode Rage</h2>
                <div className="w-11/12 md:w-1/2 aspect-video my-2">
                    <iframe 
                        src="https://www.youtube-nocookie.com/embed/TbRV1o7XjyQ"
                        title="Tedward Drives Rhode Rage"
                        loading="lazy"
                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        className="w-full h-full"
                        allowFullScreen
                        />
                </div>
            </div>
            
           
        </>
    )
}