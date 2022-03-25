import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons';


const WatchCard = ({watch}) => {
    const {image,name,price} = watch;

    return (
        <div className='flex flex-col justify-between border-x-2 border-t-2 h-[480px] min-w-[300px] max-w-[350px] grow shrink px-4 pb-3 rounded-lg shadow-lg'>

            <img src={image} alt="" className='max-h-60'/>
            <h4 className='text-2xl font-medium text-center'>{name}</h4>
            <h5 className='text-xl font-medium text-center text-gray-700'>Price : ${price}</h5>
            <button className='btn-pick'>Pick <FontAwesomeIcon icon={faCheckToSlot} size='lg'></FontAwesomeIcon></button>

        </div>
    );
};

export default WatchCard;