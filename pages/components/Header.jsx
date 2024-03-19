import React from 'react';
import Link from 'next/link'; // Import Link for navigation within Next.js
import { ConnectWallet } from "@thirdweb-dev/react";

const Header = () => {
    return (
        <nav className='bg-gray-900 text-white py-4 px-8 flex justify-between items-center'>
            <Link href="/">
                <text className='text-2xl font-bold hover:text-blue-500'>Complain Management System</text>
            </Link>
            <div className="flex items-center space-x-4">
                
                <Link href="/complain">
                    <text className="text-base hover:text-blue-500 mr-5">File a Complaint</text>
                </Link>
                <Link href="/status">
                    <text className="text-base hover:text-blue-500 mr-5">Status</text>
                </Link>
                <ConnectWallet accentColor='blue' colorMode='light' />
            </div>
        </nav>
    );
}

export default Header;
