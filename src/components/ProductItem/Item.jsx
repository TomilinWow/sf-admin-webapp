import React from 'react';
import Button from "../Button/Button";
import './Item.css'

const Item = ({product, className}) => {

    return (
        <div className={'product ' + className}>
            <img className={'img'} src="https://source.unsplash.com/random/180×115" alt="фото товара" width={180} height={115} />
            <div className="info">
                <h4 className={'title'}>{product.name}</h4>
                <p className={'weight'}>{product.weight}г</p>
                <p className={'description'}>Состав:{product.description}</p>
                <div className="price">
                    <span>Стоимость: {product.price}р</span>
                </div>
            </div>
                <div className={'btn'}>
                    <Button className={'edit-btn'}>Изменить</Button>
                    <Button className={'del-btn'}>Удалить</Button>
                </div>

        </div>
    );
};

export default Item;