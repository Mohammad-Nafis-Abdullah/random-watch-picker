import React from 'react';

const Cartitem = ({item,index}) => { 
    return (
        <div className='p-1 border-4 flex items-center gap-4 rounded-lg bg-slate-300'>
            <h5 className='font-medium text-lg'>{index+1}.</h5>
            <img className='max-w-[32px] max-h-8 rounded-full' src={item.image} alt="" />
            <h5 className='font-medium text-lg'>{item.name}</h5>
        </div>
    );
};

export default Cartitem;