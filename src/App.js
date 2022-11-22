import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes} from 'react-router-dom'
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Product from "./components/ProductList/ProductList";
import Lk from "./components/Lk/Lk";


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
            </Routes>
        </div>
    );
}

export default App;
