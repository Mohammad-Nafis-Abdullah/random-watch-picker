import React, { useEffect, useState } from 'react';

const Watches = () => {
    const [watches,setWatches] = useState([]);
    useEffect(()=> {
        fetch('watches.json')
        .then(response => response.json())
        .then(data => setWatches(data))
    },[])
    
    return (
        <div>
            {
                console.log(watches)
            }
        </div>
    );
};

export default Watches;
