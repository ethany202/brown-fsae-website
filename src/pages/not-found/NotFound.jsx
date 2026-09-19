import { Link } from "react-router-dom";

export default function NotFound(){
    return (
        <div className="w-11/12 md:w-3/4 min-h-[60vh] flex flex-col items-center justify-center text-center py-16">
            <h1 className="!text-7xl md:!text-9xl font-[Michroma-Regular] text-[#C00404]">404</h1>
            <p className="py-6">Looks like this page spun out. It doesn't exist or has been moved.</p>
            <Link to="/" className="club-email font-[SpaceGrotesk-Bold] border border-[#C00404] px-6 py-2 hover:bg-[#C00404] hover:!text-white transition-colors">
                Back to home
            </Link>
        </div>
    )
}
