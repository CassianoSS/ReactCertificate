import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import Button from './core/button.js';

function FooterForm({ btnText, isTab3Active }) {
    const Footer = styled.div`
        display: flex;
        flex-direction: row-reverse;
        background-color: inherit;
    `;

   
    return (
        <>
            <Footer>
                {
                    !isTab3Active ?
                        <Button>
                            Next
                            <FontAwesomeIcon icon={faAngleRight} color='grey' />     
                            {/* <img src="icons/AngleRight.svg" alt="Angle" />                                         */}
                           
                            
                        </Button> :
                        <Button>
                            Finish
                            <FontAwesomeIcon icon={faCheck} />
                            {/* <img src="assets/icons/Leading Icon.svg" alt="Check de confirmação" />    */}
                        </Button>
                }

            </Footer>
        </>
    );

}
export default FooterForm;