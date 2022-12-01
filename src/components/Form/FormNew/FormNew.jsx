import React, {useEffect, useState} from 'react';
import Button from "../../Button/Button";
import './FormNew.css';
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";

export default function FormNew() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const apiCatalogAdd = 'http://street.test/api/catalog/add';

        axios.post(apiCatalogAdd, data).then(function (response) {
              console.log(true);
          })
            .catch(function (error) {
                console.log(error);
            })
    }

    const history = useNavigate()
    const toggleBack = () => {
        history('/Product')
    }
    return (
        <div className={'add'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className={"title"}>Изменение товара</h3>
                <div className="form-block">
                    <label htmlFor="">Изображение товара</label>
                    <input className={"input"} type="text" placeholder={"путь"} {...register("src", {required: true})}/>
                </div>
                <div className="form-block">
                    <label htmlFor="">Название</label>
                    <input className={"input"} type="text" placeholder={"ad"} {...register("name", {required: true})}/>
                </div>
                <div className="form-block">
                    <label htmlFor="">Категория</label>
                    <select {...register("category", {required:true, valueAsNumber: true,})}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                    </select>
                </div>
                <div className="form-block">
                    <label htmlFor="">Вес</label>
                    <input className={"input"} type="number" placeholder={"ad"} {...register("weight", {required:true, valueAsNumber: true,})}/>
                </div>
                <div className="form-block">
                    <label htmlFor="">Состав</label>
                    <input className={"input"} type="text" placeholder={"ad"} {...register("description", {required: true})}/>
                </div>
                <div className="form-block">
                    <label htmlFor="">Цена</label>
                    <input className={"input"} type="number" placeholder={"ad"} {...register("value", {required:true, valueAsNumber: true,})}/>
                </div>
                <div className="form-btn">
                    <Button onClick={toggleBack}>Отмена</Button>
                    <input type="submit" />
                </div>
            </form>
        </div>
    );
}




