import React from 'react';
import styled from 'styled-components';

function LabeledCheckbox({ label }) {

    const Label = styled.p`
        margin-top: 20px ;
        font-size: 16px !important;
        background-color: inherit;

    `;

    return (
        <>


            <Label id="checkid">
                <input for="checkid" type='checkbox' />
                {label}
            </Label>

        </>
    );

}

export default LabeledCheckbox;