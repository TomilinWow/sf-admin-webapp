import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes} from 'react-router-dom'
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Product from "./components/Catalog/ProductList/ProductList";
import Lk from "./components/Lk/Lk";
import FormNew from "./components/Form/FormNew/FormNew";
import FormEdit from "./components/Form/FormEdit/FormEdit";
import Bio from "./components/Lk/Bio/Bio";



function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<Home />}/>
                <Route path={'Product'} element={<Product />}/>
                <Route path={'Lk'} element={<Lk />}></Route>
                <Route path={'FormEdit'} element={<FormEdit />}></Route>
                <Route path={'FormNew'} element={<FormNew />}></Route>
                <Route path={'Home'} element={<Home />}></Route>
                <Route path={'Lk/Bio'} element={<Bio />}></Route>
            </Routes>
        </div>
    );
}

export default App;
