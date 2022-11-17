import React from 'react';
import './ProductList.css'
import {useTelegram} from "../../hooks/useTelegram";
import Item from "../ProductItem/Item";

const products = [
    {id: 1, title: 'Шаверма классическая', weight: 400, description: 'курица, морковка, соус, огурец, сыр, лаваш', price: 400},
    {id: 2, title: 'Шаверма классическая', weight: 400, description: 'курица, морковка, соус, огурец, сыр, лаваш', price: 400},
    {id: 3, title: 'Шаверма классическая', weight: 400, description: 'курица, морковка, соус, огурец, сыр, лаваш', price: 400},
    {id: 4, title: 'Шаверма классическая', weight: 400, description: 'курица, морковка, соус, огурец, сыр, лаваш', price: 400},
    {id: 5, title: 'Шаверма классическая', weight: 400, description: 'курица, морковка, соус, огурец, сыр, лаваш', price: 400},
    {id: 6, title: 'Шаверма классическая', weight: 400, description: 'курица, морковка, соус, огурец, сыр, лаваш', price: 400},
    {id: 7, title: 'Шаверма классическая', weight: 400, description: 'курица, морковка, соус, огурец, сыр, лаваш', price: 400},
    {id: 8, title: 'Шаверма классическая', weight: 400, description: 'курица, морковка, соус, огурец, сыр, лаваш', price: 400},
]

const ProductItem = () => {

    return (
        <div className={'list'}>
            <h3>Каталог</h3>
            <div className="list-items">
                {products.map(item => (
                    <Item
                        product={item}
                        className={'item'}
                    />
                ))}
            </div>

        </div>
    );
};

export default ProductItem;