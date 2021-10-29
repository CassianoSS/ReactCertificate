import React from 'react';
import styled from 'styled-components';
import LabeledCheckbox from './core/labeled-checkbox.js';
import LabeledInput from './core/labeled-input.js';


function Tab1() {
    const Contato = styled.div`
        display: flex;
        justify-content: space-between;
        background-color: inherit;
        margin: 0px;
    `;
    const EmailBox = styled.div`
        width: 65%;
        background-color: inherit;
        margin: 0px;
    `;

    const PhoneBox = styled.div`
        width: 30%;
        background-color: inherit;
        margin: 0px;
    `;

    const BdayTitle = styled.p`
        font-size: 18px;
        color: #767676;
        background-color: inherit;
    `;

    const BdayDate = styled.div`
        width: 22%;
        background-color: inherit;
        
    `;

    const BdayBox = styled.div`
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        margin: 10x 0;    
        background-color: inherit;    
    `;

    return (
        <>
            <LabeledInput
                inputLabel='Full Name*'
                placeholder='Foo Bar'
                required
            />
            <LabeledInput
                inputLabel='Nickname*'
                placeholder='Juanito'
                required
            />
            <Contato>
                <EmailBox>
                    <LabeledInput
                        inputLabel='Email*'
                        placeholder='foo@bar.com'
                    />
                </EmailBox>
                <PhoneBox>
                    <LabeledInput
                        inputLabel='Phone*'
                        placeholder='(00) 0 0000-0000'
                    />
                </PhoneBox>
            </Contato>
            <BdayTitle>
                Birthday*
            </BdayTitle>
            <BdayBox>
                <BdayDate>
                    <LabeledInput
                        inputLabel='Day*'
                        placeholder=' '
                    />
                </BdayDate>
                <BdayDate>
                    <LabeledInput
                        inputLabel='Month*'
                        placeholder=' '
                    />
                </BdayDate>
                <BdayDate>
                    <LabeledInput
                        inputLabel='Year*'
                        placeholder=' '
                    />
                </BdayDate>
                <BdayDate>
                    <LabeledInput
                        inputLabel='Age*'
                        placeholder=' '
                    />
                </BdayDate>
            </BdayBox>
            <LabeledCheckbox label=' I accept the terms and privacy.'/>
        </>
    );
}

export default Tab1;