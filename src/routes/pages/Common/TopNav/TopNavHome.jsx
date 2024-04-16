import React from "react";

import { default as MainImg } from '../../../../img/jooyajooya.png'

import './TopNavHome.css';


export const TopNavHome = ({
    buttonClick,
}) => {

    return (
        <div className="top-nav-conatiner" style={{padding:'0px 0.5rem'}}>
            <div className="top-nav-wrap">
                <div className="top-nav-item">
                    <span className="Title-name">
                        <img src={MainImg}/>
                    </span>
                </div>
            </div>
        </div>
    )
}