import React from 'react';
import WatchCard from './WatchCard';

const Watches = ({watches,picker}) => {
    return (
        <div className='col-span-full py-10 xl:py-20 flex flex-wrap gap-5 justify-center z-10 xl:col-span-3 xl:mt-[85px]'>
            {
                watches.map(watch => <WatchCard watch={watch} key={watch.id} picker={picker}></WatchCard>)
            }
        </div>
    );
};

export default Watches;
