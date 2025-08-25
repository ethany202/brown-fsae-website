import Title from "../../components/title/Title.jsx";
import sponsorsBanner from '../../assets/images/sponsors/brown-fsae-sponsors.jpg';
import './Sponsors.css';

const importedSponsors = import.meta.glob('../../assets/images/sponsors/sponsor-logos/*.{png,jpg,jpeg,svg}', { eager: true });

export default function Sponsors(){

    const sponsorLogos = Object.values(importedSponsors).map((mod) => mod.default);

    return (
        <>
            <Title titlePhotoRef={sponsorsBanner} title={"Sponsors"}/>

            <div className="w-full">
                <div className="py-8 flex flex-col items-center justify-center">
                    <h1 className="!text-5xl font-[SpaceGrotesk-Bold] text-[#C00404] py-4">Thank You Sponsors!</h1>
                    {/* <p>
                        Interested in becoming a sponsor? Get in touch with us at &nbsp;
                        <a className="club-email" href={"mailto:fsae@brown.edu"}>fsae@brown.edu</a>
                    </p> */}
                </div>
            </div>

            <div className="w-11/12 bg-white flex flex-col items-center justify-center my-4">
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

            <div className="w-3/4 py-16">
                <h1 className="font-[Michroma-Regular]">Steps to Follow to Support BFR:</h1>
                <ol className="fundraising-steps list-decimal list-inside space-y-2 p-6">
                    <li>Navigate to the fundraising &nbsp; 
                        <a href="https://bbis.advancement.brown.edu/BBPhenix/give-now?did=fe90510b-4d79-4f59-ac4b-debdda0f5d95">site</a>
                    </li>
                    <li>Enter a donation amount and click <span className="font-[SpaceGrotesk-Bold]">"+ Add Gift"</span></li>
                    <li>(Optional) Select any features to your donation, such as recurring, joint gift, memorial, etc.</li>
                    <li>Proceed to checkout by scrolling to the bottom of the page and selecting "Contact Info"</li>
                    <li>Let us know! Please fill out this quick <a href="https://docs.google.com/forms/d/e/1FAIpQLSeh9MWAmptNV7aaG7qcPmwKn2ujjvcjVWF4loqC_CY74Rmzlw/viewform?usp=sf_link">form</a> to let us know you have donated (for accounting purposes as well as getting your name on our car!)</li>
                </ol>
            </div>
        </>
    )
}