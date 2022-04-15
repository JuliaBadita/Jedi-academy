import React from "react"

export default function SaberButton({text}){
    return (
        <div className="buttonSaber">
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
            <span className="line-4"></span>
            {text}
        </div>
    )
}