import React from 'react'

const StepperControl = ({ handleClick, currentStep, steps }) => {
    return (
        <div className='container flex justify-around mt-4 mb-8'>
            <button className={`btn btn-white ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`} onClick={() => handleClick("previous")}>
                Back
            </button>
            <button class={`btn  ${currentStep === steps.length ? "btn-dark-blue" : "btn-blue"}`} onClick={() => handleClick("next")}>
                {currentStep === steps.length ? "Export" : "Next"}
            </button>
        </div>
    )
}

export default StepperControl