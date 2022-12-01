import React, {useState} from 'react';
import './FormEdit.css';
import Button from "../../Button/Button";
const FormEdit = (props) => {

    const [name, setName] = useState('');
    const [weight, setWeight] = useState('');
    const [src, setSrc] = useState('');
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const toggleBack = () => {
        console.log(true)
    }

    const  toggleSave = () => {

    }

    return (
        <div {...props} className={"form-open"}>
            <form action="" method="post">
                <h3 className={"title"}>Изменение товара</h3>
                <div className="form-block">
                    <label htmlFor="">Изображение товара</label>
                    <input className={"input"} type="text" placeholder={"путь"}/>
                </div>
                <div className="form-block">
                    <label htmlFor="">Название</label>
                    <input className={"input"} type="text" placeholder={"ad"}/>
                </div>
                <div className="form-block">
                    <label htmlFor="">Вес</label>
                    <input className={"input"} type="text" placeholder={"ad"}/>
                </div>
                <div className="form-block">
                    <label htmlFor="">Состав</label>
                    <input className={"input"} type="text" placeholder={"ad"}/>
                </div>
                <div className="form-block">
                    <label htmlFor="">Цена</label>
                    <input className={"input"} type="text" placeholder={"ad"}/>
                </div>
                <div className="form-btn">
                    <Button onClick={toggleBack}>Отмена</Button>
                    <Button onClick={toggleSave}>Сохранить</Button>
                </div>
            </form>
        </div>
    );
};

export default FormEdit;