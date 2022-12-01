import React, {useEffect, useState} from 'react';
import Button from "../../Button/Button";
import './Item.css'
import axios from "axios";

const Item = ({product, className}) => {

    const [state, setState] = useState(false);

    const toggleEdit = () => {
        console.log(product.id)
        setState(!state)
    }

    const toggleDel = () => {
        const delProduct = 'http://street.test/api/catalog/delete';
        const data = {
            "id": product.id
        }
        axios.post(delProduct, {data}).then(function (response) {
            console.log(true);
        })
            .catch(function (error) {
                console.log(error);
            })
    }

    const toggleBack = () => {
        console.log(true)
    }

    const toggleSave = () => {
        //Запрос к БД
        console.log(true)
    }
    return (
        <div className={'products'}>
            <div className={'product ' + className + (state ? ' none':'')} key={product.id}>
                <img className={'img'} src="https://picsum.photos/200/300" alt="фото товара" width={180} height={115} />
                <div className="info">
                    <h4 className={'title'}>{product.name}</h4>
                    <p className={'weight'}>{product.weight}г</p>
                    <p className={'description'}>Состав:&nbsp;{product.description}</p>
                    <div className="price">
                        <span>Стоимость: {product.value}р</span>
                    </div>
                </div>
                <div className={'btn'}>
                    <Button className={'edit-btn'} onClick={toggleEdit}>Изменить</Button>
                    <Button className={'del-btn'} onClick={toggleDel}>Удалить</Button>
                </div>
            </div>
            <div className={"form-toggle " + (state ? "form":"")}>
                <h3 className={"title"}>Изменение товара</h3>
                <div className="form-block">
                    <label htmlFor="">Изображение товара</label>
                    <input className={"input"} type="text" placeholder={"путь"}/>
                </div>
                <div className="form-block">
                    <label htmlFor="">Название</label>
                    <input className={"input"} type="text" placeholder={"ad"} defaultValue={product.name}/>
                </div>
                <div className="form-block">
                    <label htmlFor="">Вес</label>
                    <input className={"input"} type="text" placeholder={"ad"} defaultValue={product.weight}/>
                </div>
                <div className="form-block">
                    <label htmlFor="">Состав</label>
                    <input className={"input"} type="text" placeholder={"ad"} defaultValue={product.description}/>
                </div>
                <div className="form-block">
                    <label htmlFor="">Цена</label>
                    <input className={"input"} type="text" placeholder={"ad"} defaultValue={product.value}/>
                </div>
                <div className="form-btn">
                    <Button onClick={toggleEdit}>Отмена</Button>
                    <Button onClick={toggleSave}>Сохранить</Button>
                </div>
            </div>
        </div>

    );
};

export default Item;