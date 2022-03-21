import GoogleMapReact from 'google-map-react';
import './style.css';
import { useSelector } from 'react-redux';

import MapMarker from '../map-marker';

const Map = ({ petshops }) => {

    const { mapCenter } = useSelector(state => state.shop);
    return(
        <div className='container-map'>            
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                center={mapCenter}
                defaultZoom={15}
            >
                {petshops.map((p) => 
                    <MapMarker petshop={p} lat={p.location.lat} lng={p.location.lng}/>
                )}
            </GoogleMapReact>
        </div>
    );
}

export default Map;