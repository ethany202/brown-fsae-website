import Title from "../../components/title/Title";
import supportBanner from '../../assets/images/support/brown-fsae-support.jpg';
import supportSign from '../../assets/images/support/brown-fsae-support-sign.jpg';
import './Support.css';

export default function Support(){
    return (
        <>
            <Title titlePhotoRef={supportBanner} title={"Support"}/>
    
            <div className="w-3/4 flex flex-col items-center justify-center">
                <div className="py-8">
                    <h5 className="text-2xl font-[SpaceGrotesk-Bold]">
                        Welcome to the Brown Formula Racing fundraising page! We appreciate all amounts of 
                        donations, no matter how large or small! 
                    </h5>
                </div>

                <img src={supportSign} className="w-3/4 py-8"/>
            </div>

            <div className="w-3/4 py-8">
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