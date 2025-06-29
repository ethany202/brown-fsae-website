import React from "react";
import './PageBase.css';

export default function PageBase({children}){
    return (
        <div className="w-full flex flex-col h-screen">
            {children}
        </div>
    )
}