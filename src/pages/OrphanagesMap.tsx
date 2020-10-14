import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :) </p>
                </header>
                <footer>
                    <strong> Porto Alegre</strong>
                    <span>Rio Grande do Sul </span>
                </footer>
            </aside>
            <Map center={[-30.0263149, -51.1908618]}
                zoom={13.75}
                style={{ width: '100%', height: '100%' }}
            >

                <TileLayer url={"https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoicm9uYWxkb2ZpbGhvMiIsImEiOiJja2c5bmFhN3UwMjBqMnl0aG81djZscDU3In0.G5SAiz3HXfxJT_BleLHTSw"} />
            </Map>
            <Link to="" className="create-orphanage" > <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    );
}
export default OrphanagesMap;