import React from "react";
import './Categories.css';

export const Categories = () => {
    return (
        <ul className="categories-button-container">
            <li className="categories-button">
                <a className="category-link">
                    <span>전화타로</span>
                    <img src={process.env.PUBLIC_URL + './logo192.png'} />
                </a>
            </li>
            <li className="categories-button">
                <a className="category-link">
                    <span>전화신청</span>
                    <img src={process.env.PUBLIC_URL + './logo192.png'} />
                </a>
            </li>
            <li className="categories-button">
                <a className="category-link">
                    <span>전화사주</span>
                    <img src={process.env.PUBLIC_URL + './logo192.png'} />
                </a>
            </li>
            <li className="categories-button">
                <a className="category-link">
                    <span>후기모음</span>
                    <img src={process.env.PUBLIC_URL + './logo192.png'} />
                </a>
            </li>
        </ul>
    )
}