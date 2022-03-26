import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import Watches from './Watches';

const Main = () => {
    const [watches,setWatches] = useState([]);
    useEffect(()=> {
        fetch('watches.json')
        .then(response => response.json())
        .then(data => setWatches(data))
    },[]);

    const [pick,setPick] =useState([]);

    const picker = (watch)=> {
        if(pick.length<4){
            pick.indexOf(watch)===-1?setPick([...pick,watch]):alert(`${watch.name} already selected`);
        }
        else{
            alert(`Can't add more then 4 watches`);
        }
    }

    return (
        <div className='container mx-auto xl:grid grid-cols-4 flex flex-row flex-wrap-reverse'>
            
            <Watches watches={watches} picker={picker}></Watches>

            <Cart items={pick}></Cart>

        </div>
    );
};

export default Main;