import React from 'react';

const QandA = () => {
    return (
        <div className='basis-full p-4 border-4 border-slate-300 rounded-md bg-slate-200 flex flex-wrap justify-center gap-3'>
            <h1 className='basis-full text-3xl text-center font-medium pt-6 pb-3'>Question and Answer</h1>
            <div className='basis-[300px] grow shrink border shadow p-2 overflow-hidden'>
                <h3 className='text-xl font-medium decoration-[3px] min-h-[64px]'>Q1: How React works ?</h3>
                <p className='text-justify text-md text-gray-800 my-1 max-h-[350px] overflow-auto pr-2'><span className='font-medium text-black text-xl underline decoration-[3px] overflow-auto'>Ans :</span> React is a JavaScript frame work that helps a developer to builing UI easily. React compile jsx into html and make a virtual dom where it is stored all the component or elements. If there is any kind of change in state react create a new virtual dom and start to compare the newly created dom to previous dom and find the change by following <b>Diff Algorithm</b>. Then update the changes into the <b>Browser Dom</b>. Finally Rerander the application</p>
            </div>
            <div className='basis-[300px] grow shrink border shadow p-2 overflow-hidden'>
                <h3 className='text-xl font-medium decoration-[3px] min-h-[64px]'>Q2: Difference between props and state ?</h3>
                <p className='text-justify text-md text-gray-800 my-1 max-h-[350px] overflow-auto pr-2'><span className='font-medium text-black text-xl underline decoration-[3px] overflow-auto'>Ans :</span> <br /> 
                <b>State:</b> <br /> 
                A state is an updatable structure  used to hold data or information about a component and can change over time. State changes can occur in  response to user actions or system events. It is the heart of the Reaction component that determines how the component behaves and how it is rendered. The state should be kept as simple as possible. Represents the  local status or information of a component. It can only be accessed or modified within or directly from the component.
                <br /><br />
                <b>Props:</b> <br />
                Props are components that can only be read. It's an object that holds the value of a tag's attributes and functions similarly to HTML attributes. It allows data to be sent from one component to another. It's comparable to function arguments, and it may be supplied to the component in the same manner that function arguments can. Because props are immutable, we can't change them from within the component.</p>
            </div>
            <div className='basis-[300px] grow shrink border shadow p-2 overflow-hidden'>
                <h3 className='text-xl font-medium decoration-[3px] min-h-[64px]'>Q3: How useState() hook works ?</h3>
                <p className='text-justify text-md text-gray-800 my-1 max-h-[350px] overflow-auto pr-2'><span className='font-medium text-black text-xl underline decoration-[3px] overflow-auto'>Ans :</span> useState() hooks allows to add state to a functional component. Call react. A useState() within a function component produces a single  state associated with that component. The state of the class is always an object, but the state of the hook can be of any type. Each  state item contains a single value and can be an object, an array, a Boolean value, or any other possible type. This is especially useful for the status of local components.</p>
            </div>
        </div>
    );
};

export default QandA;