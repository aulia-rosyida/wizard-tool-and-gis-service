import React from 'react'
import './Styles.css';


function Option({ name, id, imagePath }) {
    return (
        <div>
            <input class="hidden" id={id} type="radio" name="radio" checked />
            <label class="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" for={id}>
                <span class="text-xl font-bold mt-2 text-center pb-4">{name}</span>
                <img src="https://osm.gs.mil/images/screenshots/slippymap.png" alt="Map Default" />
                {/* <img href={require(imagePath)} alt="Map Default" /> */}
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
                    <Option name="OpenStreetMap" id="osm" imagePath={'/src/assets/esri-maps.png'} />
                    <Option name="ESRI Map" id="esri" imagePath={'/src/assets/esri-maps.png'} />
                    <Option name="Google Maps" id="gmaps" imagePath={'/src/assets/esri-maps.png'} />
                </form>
            </div>
        </div>
    )
}
