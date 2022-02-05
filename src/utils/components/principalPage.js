import React, {useEffect, useState} from 'react';
import GlobalHeader from "./header";
import {Card} from "antd";
import {IframeContainer} from "./iframeContainer";
import {useSelector} from "react-redux";


export const PrincipalPage = (props) => {
    const darkMode = useSelector((state) => state.Reducer.DarkMode)
    const [colorStickyBar, setColorStickyBar] = useState("RGBA(255, 255, 255, 0.04)");



    return (
        <IframeContainer menuType={props.menuType}>
            <GlobalHeader/>
            <Card style={{
                backgroundColor: darkMode === false ? "#F0F1F4" : "#000000",
                border: darkMode === false ? "1px solid white" : "1px solid #141414"
            }} className={"card"}>
                <Card style={{
                    backgroundColor: darkMode === false ? "#FFFFFF" : "#141414",
                    border: darkMode === false ? "1px solid white" : "1px solid #141414"
                }} className={"card2"}>
                    {props.children}
                </Card>
            </Card>
        </IframeContainer>
    )
}