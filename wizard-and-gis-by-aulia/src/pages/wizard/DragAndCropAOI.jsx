import React, { Component } from 'react'
import './Styles.css';
import Leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import PeatJson from '../../assets/indonesia_peat_distribution.json';

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
        lat: 1.694394,
        lng: 101.445007,
        zoom: 5,
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
                        {this.props.type === "osm" ?
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                            /> : <div />}
                        {this.props.type === "ersi" ?
                            <TileLayer
                                attribution='&copy; <a href="https://www.arcgis.com/home/item.html?id=10df2279f9684e4a9f6a7f08febac2a9">Source: Esri, Maxar, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community</a> Powered by Esri'
                                url='https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}?token=AAPK66b2d6ca74724728812f8074446a0496th2t15LkkM-GHOQxIIpil5KveJkz6CSiV-voH2jaIie5FDzTEKoGiKxZkSDdb9sd'
                                // url='
                                // https://basemaps-api.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer?token=AAPK66b2d6ca74724728812f8074446a0496th2t15LkkM-GHOQxIIpil5KveJkz6CSiV-voH2jaIie5FDzTEKoGiKxZkSDdb9sd'
                                crossOrigin={true}
                            /> : <div />}
                        {this.props.type === "gmaps" ?
                            <TileLayer
                                attribution='&copy; <a href="https://about.google/brand-resource-center/products-and-services/geo-guidelines/#required-attribution"> Google satellite basemap</a>'
                                url='https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
                                crossOrigin={true}
                            /> : <div />}
                        <GeoJSON attribution="&copy; credits due..." data={PeatJson} />
                        <Marker position={position}>
                            <Popup>
                                <span>Starting point:<br />Dumai, Indonesia</span>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        )
    }
}
