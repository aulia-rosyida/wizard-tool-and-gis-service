import React from 'react'
import { Stepper } from 'react-form-stepper';

// [TAKEOUT]
const StepperCustom = ({ currentStep }) => {

    console.log("current step in stepper:" + currentStep);
    return (
        <Stepper
            steps={[
                { label: 'Input Data' },
                { label: 'Select Basemap' },
                { label: 'Drag and Crop Area of Interest' },
                { label: 'Review' },
            ]}
            activeStep={currentStep}
        />
    )
}

export default StepperCustom