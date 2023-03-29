import React from 'react'
import './Styles.css';

function Checklist() {
    return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M5 12l5 5l10 -10" />
    </svg>;
}


function Option({ name, id }) {
    return (
        <div>
            <input class="hidden" id={id} type="radio" name="radio" checked />
            <label class="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" for={id}>
                <span class="text-xl font-bold mt-2 text-center">{name}</span>
                <Checklist />
            </label>
        </div>
    );
}


export default function SelectBasemap() {

    return (
        <div className="container mx-auto bg-white rounded-xl shadow border p-8 m-10">
            <p className="text-3xl text-gray-700 font-bold mb-5 text-center">
                Select Basemap
            </p>
            <div class="flex items-center justify-center py-12">
                <form class="grid grid-cols-3 gap-2 w-full max-w-screen-sm">
                    <Option name="OpenStreetMap" id="radio_1" />
                    <Option name="ESRI Map" id="radio_2" />
                    <Option name="Google Maps" id="radio_3" />
                </form>
            </div>
        </div>
    )
}
