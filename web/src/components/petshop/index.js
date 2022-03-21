import { useDispatch, useSelector } from 'react-redux';
import { setMapCenter, setPetShopMapSelected } from '../../store/modules/shop/action';
import './style.css';

const Petshop = ({petshop}) => {

    const dispatch = useDispatch();
    const { petshopMapSelected } = useSelector((state) => state.shop);

    const setSelectedPetshop = (petshop) => {
        console.log('Setando para petshop =>', petshop);
        //setar a petshop selecionada
        dispatch(setPetShopMapSelected(petshop._id));
        //setar o centro do mapa
        dispatch(setMapCenter(petshop.location));
    }

    return(<li className={`petshop d-inline-block ${petshopMapSelected === petshop._id ? 'active': ''}`} 
    
    onClick={() => setSelectedPetshop(petshop)}>
        <div className="d-inline-block">
            <img src={petshop.logo} className="img-fluid"/>
        </div>
        <div className="d-inline-block pl-3 align-bottom">
            <b>{petshop.nome}</b>
            <div className="petshop-infos">
                <span className="mdi mdi-star"></span>
                    <text>
                        <b>2,8</b>
                    </text>
                    <span className="mdi mdi-cash"></span>
                    <text>$$$</text>
                    <span className="mdi mdi-crosshairs-gps"></span>
                    <text>2,9 km</text>
            </div>
            <label className="badge badge-primary">Frete Grátis</label>
        </div>           
    </li>);
}

export default Petshop;