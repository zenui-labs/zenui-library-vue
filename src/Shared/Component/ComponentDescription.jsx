import React from 'react';

const ComponentDescription = ({text}) => {
    return (
        <p className='w-full 425px:w-[80%] dark:text-darkSubTextColor text-text text-[1rem]'>
            {text}
        </p>
    );
};

export default ComponentDescription;
