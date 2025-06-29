

export default function ContactUs(){
    return (
        <>
            <div className="w-3/4 py-20">
                <div className="grid grid-cols-2 gap-8">
                    <div className="w-full">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1250.0243520178208!2d-71.3991011044252!3d41.82666790423696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4453b348ca60f%3A0x7347a5dba1891440!2sPrince%20Engineering%20Laboratory%2C%20184%20Hope%20St%2C%20Providence%2C%20RI%2002912!5e0!3m2!1sen!2sus!4v1751155835098!5m2!1sen!2sus" 
                            loading="lazy"
                            className="w-full h-96"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="w-full">
                        <div className="py-2">
                            <h1 className="text-[#C00404] !font-[SpaceGrotesk-Bold]">Visit Us</h1>
                            <p className="py-4 !text-xl/[2rem]">
                                Prince Labs 213 (PCSR)
                                <br></br>
                                184 Hope Street
                                <br></br>
                                Providence, RI, 02912
                            </p>
                        </div>
                        <div className="py-2">
                            <h1 className="text-[#C00404] !font-[SpaceGrotesk-Bold]">Email Us</h1>
                            <p className="py-4 !text-xl/[2rem]">
                                All business inquiries can be directed to: &nbsp;
                                <a className="club-email" href={"mailto:fsae@brown.edu"}>fsae@brown.edu</a>
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}