import React from "react";
import './SlickList.css'

import { default as SlickImg } from '../../../../../img/MainBanner01.png'

export const SlickList = ({
    onClickImg
}) => {
    return (
        <div className="slick-list">
            <img className="slick-images" onClick={() => onClickImg()} src={ SlickImg } />
        </div>
    )
}