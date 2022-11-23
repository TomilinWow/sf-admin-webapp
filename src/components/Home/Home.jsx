import React from 'react';

import Button from "../Button/Button";
import './Home.css';
import {useNavigate} from "react-router-dom";


const Home = () => {

    const history = useNavigate()
    const getProducts = () => {
        history('/Product')
    }
    const getLk = () => {
        history('/Lk')
    }

    return (
        <div className={'home'}>
            <h3>Добро пожаловать в Админ панель</h3>
            <Button className={'products'} onClick={getLk}>Личный кабинет</Button>
            <Button className={'products'} onClick={getProducts}>Каталог</Button>
        </div>

    );
};

export default Home;
