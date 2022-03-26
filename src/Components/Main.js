import React, { useEffect, useState } from 'react';
import { getStorage, setStorage } from '../utilities/storage';
import Cart from './Cart';
import Watches from './Watches';

const Main = () => {

    // state declare for fetch watches from watches.json file
    const [watches,setWatches] = useState([]);
    useEffect(()=> {
        fetch('watches.json')
        .then(response => response.json())
        .then(data => setWatches(data))
    },[]);


    // state declare for selected item in the cart
    const [pick,setPick] = useState(getStorage());

    const picker = (watch)=> {
        const check = pick.find((item)=> item.id===watch.id);
        if(pick.length<4){
            if (!check) {
                setPick([...pick,watch]);
                // console.log('picked items setted through set pick');
            }
            else{
                alert(`${watch.name} already selected`)
            }
        }
        else{
            alert(`Can't add more then 4 watches`);
        }
    }

    useEffect(()=> {
        setStorage(pick);
        // console.log('pick :',pick);
    },[pick])


    return (
        <div className='container mx-auto xl:grid grid-cols-4 flex flex-row flex-wrap-reverse'>
            
            <Watches watches={watches} picker={picker}></Watches>

            <Cart items={pick} setItems={setPick}></Cart>

        </div>
    );
};

export default Main;