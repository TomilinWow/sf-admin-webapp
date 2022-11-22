import React from 'react';

import './Product.css'
import ItemList from "../ProductItem/Item";
import {useNavigate} from "react-router-dom";
import Button from "../Button/Button";

const Product = () => {

    const history = useNavigate()
    const getHome = () => {
        history('/Home')
    }
    return (
        <div>
            <Button className={} onClick={getHome}>Назад</Button>
            <h2>Каталог</h2>
            <ItemList/>
        </div>

    );
};

export default Product;