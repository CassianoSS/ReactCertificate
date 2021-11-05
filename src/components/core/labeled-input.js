import React from 'react';
import styled from 'styled-components';

const Formbox = styled.div`
margin: 30px 0;
background-color: inherit;
`;

const CustomLabel = styled.p`
font-size: 14px;
color: #767676;
background-color: inherit;
margin-bottom: 3px;
`;

const CustomInput = styled.input`    
font-size: 16px;
color: #767676;
border: 2px solid #aaaaaa;
border-radius: 4px;
width: 100%;
height: 40px;
padding-left: 10px;    
background-color: inherit;
`;



function LabeledInput({ 
    inputLabel, 
    placeholder,
    onChange,
    value, 
    type,
    pattern,
    required 

}) {


    return (
        <>            
                <Formbox>
                    <CustomLabel>
                        {inputLabel}
                    </CustomLabel>
                    <CustomInput 
                    placeholder={placeholder} 
                    onChange={onChange}
                    value={value}
                    required={required}
                    type={type}
                    pattern={pattern}
                    />
                </Formbox>
            
        </>
    );
}

export default LabeledInput;