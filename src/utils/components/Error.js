import React from 'react';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next"
const Error = () =>{
const {t}=useTranslation()

    return(
        <div className={"Default_Page"}>
            <span className="icon-404 icon404"></span>
            <h2>{t("error.oops")}</h2>
            <p>{t("error.Exist")}</p>
            <Link to='/' className='btn'>
                {t("error.Home")}
            </Link>
        </div>
    );
}

export default Error