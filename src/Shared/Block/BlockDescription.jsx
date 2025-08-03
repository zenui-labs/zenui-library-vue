import React from 'react';

const BlockDescription = ({text}) => {
    return (
        <p className='w-full 425px:w-[90%] dark:text-darkSubTextColor text-text text-[1rem]'>
            {text}
        </p>
    );
};

export default BlockDescription;
