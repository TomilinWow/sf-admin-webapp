import React, {useEffect, useState} from 'react';
import './ProductList.css'
import {useTelegram} from "../../hooks/useTelegram";
import Item from "../ProductItem/Item";
import axios, {Axios} from "axios";

// const products = [
//     {id: 1, title: 'Шаверма классическая', weight: 400, description: 'курица, морковка, соус, огурец, сыр, лаваш', price: 400},
//     {id: 2, title: 'Шаверма классическая', weight: 400, description: 'курица, морковка, соус, огурец, сыр, лаваш', price: 400},
//     {id: 3, title: 'Шаверма классическая', weight: 400, description: 'курица, морковка, соус, огурец, сыр, лаваш', price: 400},
//     {id: 4, title: 'Шаверма классическая', weight: 400, description: 'курица, морковка, соус, огурец, сыр, лаваш', price: 400},
//     {id: 5, title: 'Шаверма классическая', weight: 400, description: 'курица, морковка, соус, огурец, сыр, лаваш', price: 400},
//     {id: 6, title: 'Шаверма классическая', weight: 400, description: 'курица, морковка, соус, огурец, сыр, лаваш', price: 400},
//     {id: 7, title: 'Шаверма классическая', weight: 400, description: 'курица, морковка, соус, огурец, сыр, лаваш', price: 400},
//     {id: 8, title: 'Шаверма классическая', weight: 400, description: 'курица, морковка, соус, огурец, сыр, лаваш', price: 400},
// ]



function Catalog() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const apiCatalog = 'http://street.test/api/catalog';

        axios.post(apiCatalog).then(function (response) {
                console.log(response);
                console.log(response.data)
                const catalog = response.data;
                setItems(catalog);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [setItems])
    return (
        <div className={'list'}>
            <h3>Каталог</h3>
            <div className="list-items">
                {items.map(item => (
                    <Item
                        product={item}
                        className={'item'}
                    />
                ))}
            </div>
        </div>
    );
}




// const ProductItem = () => {
//
//     return (
//         <div className={'list'}>
//             <h3>Каталог</h3>
//             <div className="list-items">
//                 {products.map(item => (
//                     <Item
//                         product={item}
//                         className={'item'}
//                     />
//                 ))}
//             </div>
//
//         </div>
//     );
// };
//
export default Catalog;