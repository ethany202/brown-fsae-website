import Title from "../../components/title/Title.jsx";
import sponsorsBanner from '../../assets/images/sponsors/brown-fsae-sponsors.jpg';
import './Sponsors.css';

const importedSponsors = import.meta.glob('../../assets/images/sponsors/sponsor-logos/*.{png,jpg,jpeg,svg}', { eager: true });

export default function Sponsors(){

    const sponsorLogos = Object.values(importedSponsors).map((mod) => mod.default);

    console.log(sponsorLogos.length)

    return (
        <>
            <Title titlePhotoRef={sponsorsBanner} title={"Sponsors"}/>

            <div className="w-full">
                <div className="py-8 flex flex-col items-center justify-center">
                    <h1 className="!text-5xl font-[SpaceGrotesk-Bold] text-[#C00404] py-4">Thank You Sponsors!</h1>
                    <p>
                        Interested in becoming a sponsor? Get in touch with us at &nbsp;
                        <a className="club-email" href={"mailto:fsae@brown.edu"}>fsae@brown.edu</a>
                    </p>
                </div>
            </div>

            <div className="w-11/12 bg-white flex flex-col items-center justify-center my-8">
                <div className="w-full flex flex-wrap items-center justify-center">
                    {sponsorLogos.map((sponsorLogo, idx) => {
                        return (
                            <img
                                src={sponsorLogo}
                                key={idx}
                                className="h-28 p-1"
                                />
                        )
                    })}
                </div>
            </div>
        </>
    )
}