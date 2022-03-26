import React, { useState } from 'react';
import CartItem from './CartItem';

const Cart = ({items,setItems}) => {
    const [random,setRandom] = useState({});
    const randomItem = document.getElementById('random-item');

    const randomPicker = ()=> {
        if (items.length) {
            const randomIndex = Math.floor(Math.random() * items.length) + 1;
            setRandom(items[randomIndex-1]);
            randomItem.classList.remove('hidden');
            randomItem.classList.add('block');
        }
    };

    const clearSelection = ()=> {
        setItems([]);
        setRandom({});
        randomItem.classList.remove('block');
        randomItem.classList.add('hidden');
    }

    return (
        <section className='container mx-auto mt-4 z-0 grow basis-full xl:fixed xl:mt-[85px] xl:h-screen'>
            <div className='border-4 border-black rounded-md mx-auto max-w-[380px] py-3 px-3 flex flex-col xl:mx-0 xl:ml-auto gap-3'>
                <div className='flex flex-col gap-1 shadow-md h-56'>
                    <h4 className='text-center font-medium text-xl underline'>Selected Watch</h4>
                    {
                        items.map((item,index)=> <CartItem item={item} index={index} key={item.id}></CartItem>)
                    }
                </div>
                <div className='h-24 rounded-md shadow-md hidden' id='random-item'>
                    <h4 className='text-center text-lg font-medium underline mb-2'>Randomly Picked Watch :</h4>
                    <div className='h-12 px-4 flex items-center gap-4 rounded-lg bg-gray-900' >
                        <h5 className='font-medium text-lg text-white'>{items.indexOf(random)+1}.</h5>
                        <img className='max-w-[32px] max-h-8 rounded-full' src={random.image} alt="" />
                        <h5 className='font-medium text-lg text-white'>{random.name}</h5>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <button onClick={randomPicker} className='btn-pick hover:bg-teal-600 hover:border-0'>Random Picker</button>
                    <button onClick={clearSelection} className='btn-pick hover:bg-red-600 hover:border-0'>Clear Selection</button>
                </div>
            </div>
        </section>
    );
};

export default Cart;