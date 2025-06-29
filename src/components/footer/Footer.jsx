import './Footer.css';

export default function Footer(){

    const redirect = (link) => {
        window.location.href = link
    }

    return (
        <div className="flex flex-col items-center justify-center bg-[#a300008a] py-9">
            <div className="py-3">
                <h4>fsae@brown.edu</h4>
            </div>
            <div className="icon-row flex py-3">
                <img src="https://static.wixstatic.com/media/11062b_cef3b719166a4815b446d4dcfcb6120d~mv2.png/v1/fill/w_88,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_cef3b719166a4815b446d4dcfcb6120d~mv2.png"
                    className="px-1 h-12"
                    onClick={() => redirect("https://www.instagram.com/brownformularacing/")}/>

                <img src="https://static.wixstatic.com/media/11062b_fe985b889c144b348eefc7bbc67018b4~mv2.png/v1/fill/w_88,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_fe985b889c144b348eefc7bbc67018b4~mv2.png"
                    className="px-1 h-12"
                    />

                <img src="https://static.wixstatic.com/media/11062b_b5690303a8ff470e9b1c03a24aff140b~mv2.png/v1/fill/w_88,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_b5690303a8ff470e9b1c03a24aff140b~mv2.png"
                    className="px-1 h-12"
                    onClick={() => redirect("https://www.linkedin.com/company/brown-formula-racing/")}/>
            </div>
            <div className="py-3">
                <h4>©2025 by Brown Formula Racing</h4>
            </div>
        </div>
    )
}