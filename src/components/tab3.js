import React from 'react';
import LabeledInput from './core/labeled-input';
import Button from './core/button';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
function Tab3() {

    const FormBox = styled.div`
        display: flex;
        justify-content: flex-end;
        margin: 30px 0;   
        background-color : inherit;
    `;
    return (
        <>
            <LabeledInput
                inputLabel='Certificates'
                placeholder='github.com/in/foo-bar-3a0560104/'
            />
            <FormBox>
                <Button>
                    <FontAwesomeIcon icon={faPlus} />
                    More
                </Button>
            </FormBox>

            <LabeledInput
                inputLabel='Team Name*'
                placeholder='linkedin.com/in/foo-bar-3a0560104/'
            />

            <LabeledInput
                inputLabel='Institution*'
                placeholder='Universidade da Paraíba'
            />

            <LabeledInput
                inputLabel='Graduation*'
                placeholder='Ciência da Computação'
            />
        </>
    );
}

export default Tab3;