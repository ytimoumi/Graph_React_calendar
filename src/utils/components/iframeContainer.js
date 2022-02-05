import React from 'react';
import {useSelector} from "react-redux";



export const IframeContainer =(props)=>{
    const accountMenu = useSelector((state)=>state.Reducer.accountMenu)
    const directMenu = useSelector((state)=>state.Reducer.directMenu)
    // use Selector redux
    const values = useSelector((state)=>state.FormDirectVideoReducer)

    switch (props.menuType) {
        case "accountSetting":
            const iframeStyle = {height: accountMenu === 2 || accountMenu === 1 ? "100vh" : "100%"}
            return <div className="showVideosDiv" style={iframeStyle}>{props.children}</div>
        case "formDirectVideo":
            if (directMenu === 2) {
                let numberRulesAdded = Object.values(values.invitation.addRules).filter(element => element === true).length
                const iframeStyle = numberRulesAdded > 3 ? {height: "100%"} : {height: "100vh"}
                return <div className="showVideosDiv" style={iframeStyle}>{props.children}</div>
            } else if (directMenu === 3) {
                let numberRulesAdded = values.socialTools.filter(element => element.switch === true).length
                return <div className="showVideosDiv" style={{height:numberRulesAdded>0?"100%":"100vh"}}>{props.children}</div>
            } else
                return <div className="showVideosDiv"  >{props.children}</div>
        default :
            return <div className="showVideosDiv">{props.children}</div>
    }
}