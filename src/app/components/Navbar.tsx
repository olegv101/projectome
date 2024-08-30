import React from "react";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="sticky top-0 bg-white shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-end items-center">
                <Image
                    src="/path/to/hex-logo.png"
                    alt="Hex Logo"
                    width={40}
                    height={40}
                />
            </div>
        </nav>
    );
};

export default Navbar;