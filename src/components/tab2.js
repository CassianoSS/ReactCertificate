import React from 'react';
import LabeledInput from './core/labeled-input';

function Tab2() {
    return (
        <> 
            <LabeledInput 
                inputLabel='LinkedIn'
                placeholder='linkedin.com/in/foo-bar-3a0560104/'
            />
            <LabeledInput 
                inputLabel='Github*'
                placeholder='github.com/in/foo-bar-3a0560104/'
            />
        </>
    );
}

export default Tab2;