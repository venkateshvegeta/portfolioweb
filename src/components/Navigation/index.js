import React from "react";
import './navigation.css';

export const NavigationPane = () => {
    const headerList = ["Home", "Experience", "About", "Contact", "Playground"]

    return (
        <div className="navigation-main">
            <span className="header-name">Venkatesh</span>
            <div className="navigation-flex-container">
                {
                    headerList.map( ele => <a href={ele === 'Home' ? '/' : `/${ele}`}><span>{ele}</span></a>)
                }
            </div>
        </div>
    )
}