import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import brownFsaeLogo from '../../assets/images/brown-fsae-logo.png';
import './Navbar.css';

export default function Navbar(){

    const [menuOpen, setMenuOpen] = useState(false)

    const navigationItems = [
        { name: "Home", href: "/" },
        { name: "Subsystems", href: "/subsystems" },
        { name: "Our Team", href: "/team" },
        { name: "Cars", href: "/cars"},
        { name: "Sponsors", href: "/sponsors"},
        // { name: "Support", href: "/support" },
        { name: "Media", href: "/media" },
        { name: "Contact Us", href: "/contact-us" },
    ]

    return (
        <nav className="w-full bg-black/50 backdrop-blur-sm fixed top-0 z-1000000">
            <div className="flex items-center justify-between lg:justify-center h-20">
                {/* logo */}
                <Link to="/" onClick={() => setMenuOpen(false)} className="h-full flex items-center px-6 lg:px-10">
                    <img src={brownFsaeLogo} className='h-[70%] filter invert py-2' alt="Brown Formula Racing"/>
                </Link>

                {/* desktop links */}
                <div className="hidden lg:flex ml-10 items-baseline space-x-8">
                    {navigationItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            end
                            className={({ isActive }) => `navbar-item px-3 py-2 font-[SpaceGrotesk-SemiBold] transition-colors duration-200 ${isActive ? "active" : ""}`}>
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                {/* hamburger */}
                <button
                    className="hamburger flex lg:hidden mr-4"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}>
                    <span className={menuOpen ? "open" : ""}></span>
                    <span className={menuOpen ? "open" : ""}></span>
                    <span className={menuOpen ? "open" : ""}></span>
                </button>
            </div>

            {/* mobile menu */}
            {menuOpen &&
                <div className="lg:hidden flex flex-col items-center pb-4 bg-black/80">
                    {navigationItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            end
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) => `navbar-item w-full text-center py-3 font-[SpaceGrotesk-SemiBold] ${isActive ? "active" : ""}`}>
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            }
        </nav>
    )
}
