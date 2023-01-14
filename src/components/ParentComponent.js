import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
    return (
        <div className='parent'>
            <ChildComponent />
            <ChildComponent />
        </div>
    );
}

export default ParentComponent;