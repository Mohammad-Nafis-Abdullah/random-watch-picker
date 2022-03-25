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


    return (
        <div className='container mx-auto xl:grid grid-cols-4 flex flex-row flex-wrap-reverse'>
            
            <Watches watches={watches}></Watches>

            <Cart></Cart>

        </div>
    );
};

export default Main;