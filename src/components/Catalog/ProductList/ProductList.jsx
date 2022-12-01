import React, {useEffect, useState} from 'react';
import './ProductList.css'
import Item from "../ProductItem/Item";
import axios, {Axios} from "axios";
import Button from "../../Button/Button";
import {useNavigate} from "react-router-dom";

function Catalog() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const history = useNavigate()

    const addProduct = () => {
        history('/FormNew')
    }

    const getHome = () => {
        history('/Home')
    }

    useEffect(() => {
        const apiCatalog = 'http://street.test/api/catalog';
        const config = {
            headers : {
                'Content-Type' : 'application/json; charset=utf-8'
            }
        };
        axios.post(apiCatalog).then(function (response) {
                const catalog = response.data;
                setItems(catalog);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [setItems])

    return (
        <div className={'list'}>
            <Button onClick={getHome}>Назад</Button>
            <h3>Каталог</h3>
            <div className="list-items">
                {items.map(item => (
                    <Item
                        key = {item.id}
                        product={item}
                        className={'item'}
                    />

                ))}
            </div>
            <Button onClick={addProduct}>Добавить</Button>
        </div>
    );
}

export default Catalog;