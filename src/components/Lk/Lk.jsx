import React from 'react';

import './Lk.css'
import Button from "../Button/Button";
import {useNavigate} from "react-router-dom";


const Lk = () => {

    const history = useNavigate()
    const getBack = () => {
        history('/Home')
    }
    const getBio = () => {
        history('/Lk/Bio')
    }
    const getModule = () => {
        history('')
    }
    const getNotify = () => {
        history('')
    }

    return (
        <div>
            <div className="list">
                <Button onClick={getBack}>Назад</Button>
                <h2 className={"list-title"}>Личный кабинет</h2>
                <Button onClick={getBio}>Информация о заведение</Button>
                <Button onClick={getModule}>Модули</Button>
                <Button onClick={getNotify}>Рассылка</Button>
            </div>
        </div>
    );
};

export default Lk;