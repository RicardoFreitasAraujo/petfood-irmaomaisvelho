import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestPetShop } from '../../store/modules/shop/action';

import Header from '../../components/header';
import Product from '../../components/product/card';

import './styles.css';

const Petshop = ({  }) => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const { petshop } =useSelector(state => state.shop );

    useEffect(() => {
        dispatch(requestPetShop(id));
    },[]);

    return(<div className="h-100"> 
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <img src={petshop.logo} className="img-fluid petshop-image"/>
                    <b>{petshop.nome}</b>
                    <div className="petshop-infos">
                        <span className="mdi mdi-star"></span>
                        <text>
                            <b>2,8</b>
                        </text>
                        <span className="mdi mdi-cash"></span>
                        <text>{petshop.categoria}</text>
                        <span className="mdi mdi-crosshairs-gps"></span>
                        <text>2,9 km</text>
                    </div>
                    <label className="badge badge-primary">Frete Grátis</label>
                </div>
                <div className="col-10">
                    <h5>Produtos</h5>
                    <br/>
                    <div className="row">
                        {petshop?.products?.map(p => <Product product={p}/>)}
                    </div>
                    {}
                </div>
            </div>
        </div>
    </div>
    );
}

export default Petshop;