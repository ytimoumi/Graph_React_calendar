import React, {useEffect} from 'react';
import './App.css';
import history from './router/history';
import {BrowserRouter} from 'react-router-dom';
import Calendar from "./Calendar/Calendar";
import {useSelector} from "react-redux";
import en_US from "antd/lib/locale/en_US";
import frFR from "antd/lib/locale/fr_FR";
import { ConfigProvider } from "antd";
import 'moment/locale/fr';
import 'react-phone-number-input/style.css'

let tabData = [
]
function App() {
    const lang =useSelector((state)=>state.Reducer.lang)
    let pathName = window.location.pathname.replace('/', '')

    useEffect(() => {
    }, []);

   
    React.useEffect(()=>{
        const root = document.querySelector(':root')

        if(tabData.includes(pathName)){
            if(JSON.parse(localStorage.getItem('darkMode'))){
                root.classList.remove('dark')
                root.classList.add('light')
               }
        }
    },[pathName])

    return (
        <ConfigProvider locale={lang==="fr"?frFR:en_US}>

        <div className="App">
            <BrowserRouter history={history}>
                <Calendar/>
            </BrowserRouter>

        </div>
        </ConfigProvider>
    );
}

export default App;
