import React from "react"
import { NavLink } from 'react-router-dom'

export default function SaberButton({text, link}){
    return (
        <div className="buttonSaber">
            <NavLink to={link}>
                <span className="line-1"></span>
                <span className="line-2"></span>
                <span className="line-3"></span>
                <span className="line-4"></span>
                {text}
            </NavLink>
        </div>
    )
}