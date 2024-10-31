import React from 'react';
import Image from 'next/image';
import logo from '/public/images/logos/ATLogo.png';

const Logo = () => {
    return (
        <div>
            <Image src={logo} alt="Logo" width={200} height={75} />
        </div>
    );
};

export default Logo;