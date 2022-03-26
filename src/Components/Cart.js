import React from 'react';
import CartItem from './CartItem';

const Cart = ({items}) => {

    return (
        <section className='container mx-auto mt-4 z-0 grow basis-full xl:fixed xl:mt-[85px] xl:h-screen'>
            <div className='border-4 border-black rounded-md mx-auto max-w-[380px] py-3 px-3 flex flex-col xl:mx-0 xl:ml-auto gap-3'>
                <div className='flex flex-col gap-1 shadow-md h-56'>
                    <h4 className='text-center font-medium text-xl underline'>Selected Watch</h4>
                    {
                        items.map((item,index)=> <CartItem item={item} index={index} key={item.id}></CartItem>)
                    }
                </div>
                <div className='h-24 rounded-md shadow-md'>
                    <h4 className='text-center text-lg font-medium underline'>Randomly Picked Watch :</h4>
                    {
                        
                    }
                </div>
                <div className='flex flex-col gap-3'>
                    <button className='btn-pick hover:bg-teal-600 hover:border-0'>Random Picker</button>
                    <button className='btn-pick hover:bg-red-600 hover:border-0'>Clear Selection</button>
                </div>
            </div>
        </section>
    );
};

export default Cart;