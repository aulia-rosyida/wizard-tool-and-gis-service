import React, { Component } from 'react';
import './Styles.css';

function FirstStep() {
    return (
        <div className="line">
            <div className="circle-step">
                <Checklist />
            </div>
        </div>
    );
}

function SecondStep() {
    return (
        <div class=" bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2">
            <Checklist />
        </div>
    );
}

function Checklist() {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M5 12l5 5l10 -10" />
    </svg>;
}

function CurrentStep() {
    return (
        <div class="bg-white h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative">
            <div class="h-3 w-3 bg-indigo-700 rounded-full"></div>
        </div>
    );
}

function UnfilledCircle() {
    return (
        <div class="w-1/3 flex justify-end">
            <div class="bg-white h-6 w-6 rounded-full shadow"></div>
        </div>
    );
}



function Tooltip({ text }) {
    return (
        <div class="absolute right-0 -mr-2">
            <div class="relative bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-12">
                <svg class="absolute top-0 -mt-1 w-full right-0 left-0" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Progress-Bars" transform="translate(-322.000000, -198.000000)" fill="#FFFFFF">
                            <g id="Group-4" transform="translate(310.000000, 198.000000)">
                                <polygon id="Triangle" points="20 0 28 8 12 8"></polygon>
                            </g>
                        </g>
                    </g>
                </svg>
                <p tabindex="0" class="focus:outline-none text-indigo-700 text-xs font-bold">{text}</p>
            </div>
        </div>
    );
}


class Wizard extends Component {
    render() {
        return <dh-component>
            <div class="w-11/12 lg:w-2/6 mx-auto py-12">
                <div class="bg-gray-200 h-1 flex items-center justify-between">
                    <div class="line justify-between relative" >
                        <Tooltip text="Step 1: analyzing" />
                        <FirstStep />
                    </div>
                    <div class="line justify-between relative" >
                        <Tooltip text="Step 2: analyzing" />
                        <SecondStep />
                    </div>
                    <div class="line justify-between relative" >
                        <Tooltip text="Step 3: analyzing" />
                        <CurrentStep />
                        <UnfilledCircle />
                    </div>
                </div>
            </div>
        </dh-component>
    }
}

export default Wizard;