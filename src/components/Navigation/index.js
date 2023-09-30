import React from "react";
import './navigation.css';

export const NavigationPane = () => {
    const headerList = ["Home", "Experience", "About", "Contact"]

    return (
        <div className="navigation-main">
            <span className="header-name">Venkatesh</span>
            <div className="navigation-flex-container">
                {
                    headerList.map( ele => <span>{ele}</span>)
                }
            </div>
        </div>
    )
}