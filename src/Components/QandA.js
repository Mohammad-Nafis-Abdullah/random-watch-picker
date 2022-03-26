import React from 'react';

const QandA = () => {
    return (
        <div className='basis-full p-4 border-4 border-slate-300 rounded-md bg-slate-200 flex flex-wrap justify-center gap-3'>
            <h1 className='basis-full text-3xl text-center font-medium'>Question and Answer</h1>
            <div className='basis-[300px] grow shrink border shadow p-2 overflow-hidden'>
                <h3 className='text-xl font-medium decoration-[3px]'>Q1: How React works ?</h3>
                <p className='text-justify text-lg text-gray-800 my-1 max-h-[350px] overflow-auto pr-2'><span className='font-medium text-black text-xl underline decoration-[3px] overflow-auto'>Ans :</span> React is a JavaScript frame work that help a developer to builing UI easily. </p>
            </div>
            <div className='basis-[300px] grow shrink border shadow p-2 overflow-hidden'>
                <h3 className='text-xl font-medium decoration-[3px]'>Q2: Difference between props and state ?</h3>
                <p className='text-justify text-lg text-gray-800 my-1 max-h-[350px] overflow-auto'><span className='font-medium text-black text-xl underline decoration-[3px] overflow-auto'>Ans :</span> </p>
            </div>
            <div className='basis-[300px] grow shrink border shadow p-2 overflow-hidden'>
                <h3 className='text-xl font-medium decoration-[3px]'>Q3: How useState() hook works ?</h3>
                <p className='text-justify text-lg text-gray-800 my-1 max-h-[350px] overflow-auto'><span className='font-medium text-black text-xl underline decoration-[3px] overflow-auto'>Ans :</span> </p>
            </div>
        </div>
    );
};

export default QandA;