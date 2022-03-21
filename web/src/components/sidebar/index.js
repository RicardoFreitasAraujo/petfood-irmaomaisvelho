import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';
import { Dock } from 'react-dock';
import Product from '../../components/product/list';

const SideBar = () => {

    const { cart } = useSelector(state => state.shop);
    const [opened, setOpened] = useState(false);
    const navigate = useNavigate();

    const total = cart.reduce((total, product) => {
        return total + product.preco;
    }, 0);


    useEffect(() => {
        window.addEventListener('openChart', () => {
            setOpened(true);
        });
    })


    return(<Dock
        position="right"
        isVisible={opened}
        onVisible={(visible) => {
            setOpened(visible);
        }}>
            <div className='container h-100 pt-4 sidebar'>
                <h5>Minha Sacola ({cart.length})</h5>
                <div className='rows products'>
                    { cart.map((p) => (<Product product={p}/>))}
                </div>
                <div className='row align-items-end footer'>
                    <div className='col-12 d-flex justify-content-between align-items-center'>
                        <b className='d-inline-block'>Total</b>
                        <h3 className='d-inline-block'>R$ {total.toFixed(2)}</h3>
                    </div>
                    <button 
                        onClick={ () => navigate('/checkout') }
                        className='btn btn-block btn-lg btn-primary rounded-0 h-50 align-items-center'>Finalizar Compra</button>
                </div>
            </div>

    </Dock>);
}

export default SideBar;
