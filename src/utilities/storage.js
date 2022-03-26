const getStorage = ()=> {
    let storageName = localStorage.getItem('watches');
    let storage;
    if (storageName) {
        storage = JSON.parse(storageName);
    }
    else{
        storage = [];
    }
    return storage;
}


const setStorage = (item)=> {
    const itemString = JSON.stringify(item);
    localStorage.setItem('watches',itemString);
}


export { getStorage,setStorage }
