import React from 'react';
import brownFsaeLogo from '../../assets/images/brown-fsae-logo.png';
import './Navbar.css';

export default function Navbar({}){

    const navigationItems = [
        { name: "Home", href: "/home", active: true },
        { name: "Subteams", href: "/subteams" },
        { name: "Our Team", href: "/team" },
        { name: "Sponsors", href: "/sponsors"},
        { name: "Support", href: "/support" },
        { name: "Media", href: "/media" },
        { name: "Contact Us", href: "/contact-us" },
    ]

    return (
        <div className="flex items-center justify-center w-full bg-black/50 backdrop-blur-sm fixed z-1000000">
            {/* Logo */}
            <div className="flex h-20">
                <a href="/home" className="h-full flex items-center px-10">
                    <img src={brownFsaeLogo} className='h-[70%] filter invert py-2'/>
                </a>
            </div>

            {/* Desktop Navigation */}
            <div className="ml-10 flex items-baseline space-x-8">
                {navigationItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={`navbar-item px-3 py-2 text-sm font-[SpaceGrotesk-SemiBold] transition-colors duration-200 `}>
                        {item.name}
                    </a>
                ))}
            </div>
        </div>
    )
}