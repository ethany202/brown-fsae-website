import './SeasonalPhotos.css';

export default function SeasonalPhotos({year, thumbnail, albumRef}){
    return (
        <div className="flex flex-col items-center justify-center my-6">
            <h5 className="py-4 text-xl font-[Michroma-Regular]">{year}</h5>
            <div className="album-wrapper">
                <a href={albumRef} className="album-ref">
                    <img src={thumbnail}/>
                    <div className="overlay"></div>
                </a>
            </div>
        </div>
    )
}