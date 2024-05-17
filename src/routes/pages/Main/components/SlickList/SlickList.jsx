import React from "react";
import './SlickList.css'

import { default as SlickImg1 } from '../../../../../img/MainBanner01.png'
import { default as SlickImg2 } from '../../../../../img/MainBanner02.png'
import { default as SlickImg4 } from '../../../../../img/MainBanner04.png'

export const SlickList = ({
    onClickImg
}) => {
    return (
        <div className="slick-list">
            <div>
                <img className="slick-images" onClick={() => onClickImg()} src={SlickImg1} />
                <img className="slick-images" onClick={() => onClickImg()} src={SlickImg2} />
                <img className="slick-images" onClick={() => onClickImg()} src={SlickImg4} />
            </div>
        </div>
    )
}