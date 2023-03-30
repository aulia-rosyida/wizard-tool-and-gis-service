import React, { Component } from 'react'
import './Styles.css';
import Leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

Leaflet.Icon.Default.imagePath =
    '../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


export default class DragAndCropAOI extends Component {
    state = {
        lat: 41.257017,
        lng: 29.077524,
        zoom: 13,
    }

    render() {
        const position = [this.state.lat, this.state.lng];


        return (
            <div className="container mx-auto bg-white rounded-xl shadow border p-8 m-10">
                <p className="text-3xl text-gray-700 font-bold mb-5 text-center">
                    Drag And Crop Area Of Interest
                </p>
                <div class="flex items-center justify-center py-4">
                    <MapContainer center={position} zoom={this.state.zoom} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        />
                        <Marker position={position}>
                            <Popup>
                                <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        )
    }
}
