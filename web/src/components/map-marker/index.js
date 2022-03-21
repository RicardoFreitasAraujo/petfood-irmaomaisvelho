import { useSelector } from 'react-redux';
import {Link } from 'react-router-dom';
import './styles.css';

import MarkerIcon from '../../assets/marker.png';
import MarkerIconSelected from '../../assets/marker-selected.png';

const MapMarker = ({petshop}) => {

    const { petshopMapSelected } = useSelector((state) => state.shop);

    return(<div>
        <Link to={`/petshop/${petshop?._id}`}>

            {petshopMapSelected}
            {petshop?._id}
            <img className='img-marker-background' src={  petshopMapSelected === petshop?._id ? MarkerIconSelected : MarkerIcon }/>
            <img src={petshop?.logo} className="img-marker"/>
        </Link>
    </div>);
}

export default MapMarker;