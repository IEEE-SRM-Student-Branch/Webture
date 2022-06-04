/**
 * Registration Button Component
 */

// Dependencies
import React from 'react';
import { Popover } from '@typeform/embed-react';

function RegButton() {
    return (
        <Popover
            id="uvednpYJ"
            tooltip='Click here to Register'
            buttonColor='#0445AF'
            data-tf-button-text="Launch me"
            medium='snippet'
            customIcon='https://images.typeform.com/images/TztgEuKUG3UM'
        />
    )
}

export default RegButton;