import React, {useEffect, useState} from 'react';
import './ProductList.css'
import Item from "../ProductItem/Item";
import axios, {Axios} from "axios";

function Catalog() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const apiCatalog = 'http://street.test/api/catalog';

        axios.post(apiCatalog).then(function (response) {
                const catalog = response.data;
                setItems(catalog);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [setItems])

    items.map(item => {
        console.log(item.id)
    })

    return (
        <div className={'list'}>
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
        </div>
    );
}

export default Catalog;