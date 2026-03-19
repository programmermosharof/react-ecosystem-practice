import React, { use } from 'react';

const Marks = ({marksPromise}) => {
    const marksData =use(marksPromise)
    console.log(marksData);
    
    return (
        <div>
            
        </div>
    );
};

export default Marks;