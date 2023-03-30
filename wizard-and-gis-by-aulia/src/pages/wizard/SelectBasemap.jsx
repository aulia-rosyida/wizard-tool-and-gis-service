import React from 'react'
import './Styles.css';


function Option({ name, id, imagePath }) {
    return (
        <div>
            <input class="hidden" id={id} type="radio" name="radio" checked />
            <label class="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" for={id}>
                <span class="text-xl font-bold mt-2 text-center pb-4">{name}</span>
                {id === "osm" ? <img className="img-basemap" src="https://osm.gs.mil/images/screenshots/slippymap.png" alt="OpenStreetMap" /> : <div />}
                {id === "esri" ? <img className="img-basemap" src="https://www.esri.com/about/newsroom/wp-content/uploads/2018/09/1213-tip-8.jpg" alt="Esri Map" /> : <div />}
                {id === "gmaps" ? <img className="img-basemap" src="https://www.google.com/maps/d/u/0/thumbnail?mid=13f7lbxmHclFswUm3k140oIU2-KI" alt="Google Map" /> : <div />}
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
                <form class="grid grid-cols-3 gap-8 w-full">
                    <Option name="OpenStreetMap" id="osm" />
                    <Option name="ESRI Map" id="esri" />
                    <Option name="Google Maps" id="gmaps" />
                </form>
            </div>
        </div>
    )
}
