import React from 'react';
import styled from 'styled-components';

const Label = styled.p`
margin-top: 20px ;
font-size: 16px !important;
background-color: inherit;

`;

function LabeledCheckbox({ label, required }) {



    return (
        <>


            <Label id="checkid">
                <input for="checkid" type='checkbox' required={required} />
                {label}
            </Label>

        </>
    );

}

export default LabeledCheckbox;