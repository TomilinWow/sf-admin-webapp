import React from 'react';
import './Bio.css'
import {useNavigate} from "react-router-dom";
import Button from "../../Button/Button";

const Bio = () => {

    const history = useNavigate()
    const getBack = () => {
        history('/Lk')
    }

    return (
        <div className={'bio'}>
            <Button onClick={getBack}>Назад</Button>
            <h3 className={'bio-title'}>Информация о заведение</h3>
            <div className="bio-info">
                <div className="bio-info__head">
                    <h3 className={"head-title"}>Шаурмячка</h3>
                    <img src="https://picsum.photos/200/300" alt="Картинка заведения" width={120} height={120} className={'head-img'}/>
                </div>
                <p className="bio-info__address">Адрес: Невский проспект, 9</p>
                <p className="bio-info__number">Телефон: 891459064523</p>
                <p className="bio-info__description">Описание: кафе шавермы</p>
                <Button>Изменить</Button>
            </div>
        </div>
    );
};

export default Bio;