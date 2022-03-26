import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className='shadow-md left-0 right-0 bg-white z-20 xl:fixed'>
            <h3 className='container mx-auto py-5 text-center text-3xl font-medium text-gray-900'>
            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon> Watches Collection</h3>
        </div>
    );
};

export default Header;