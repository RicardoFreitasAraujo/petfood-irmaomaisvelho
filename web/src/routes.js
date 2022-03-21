import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import SideBar from './components/sidebar';

import Home from './pages/home';
import Cadastro from './pages/cadastro';
import Checkout from './pages/checkout';
import PetShop from './pages/petshop';

const RoutesMenu = () => {
    return(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="petshop/:id" exact element={<PetShop/>} />
                <Route path="checkout" exact element={<Checkout/>} />
                <Route path="cadastro" exact element={<Cadastro/>} />
            </Routes>
            <SideBar/>
        </BrowserRouter>
        
    </>);
}

export default RoutesMenu;


