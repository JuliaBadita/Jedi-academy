import React from "react"
import xWing from "../images/x-wing.png"
import deathStar from "../images/death-star.png"

export default function Title({title}){
    return (
        <>
        <div className="backGroundTitle">
            <div className="titleDiv">
                <h1>{title}</h1>
                <img className="x-wing xwing-instance" src={xWing} style={{maxHeight:"100px"}} alt="Etoile de la Mort"/>
                <img className="death-star" src={deathStar} style={{maxHeight:"100px"}} alt="Vaisseau X-wing"/>
            </div>
        </div>
        <div className="comet-rain">
            <svg aria-hidden="true" id="svg-comet" className="svg-defs" data-name="comet" viewBox="0 0 195 173.05" width="195" height="173.05">
                <symbol id="comet">
                    <path d="M192.39.66c-33.66,31.46-93.3,81.16-129,108.88L3.42,156c-5,3.89-4.29,11.28.74,15.4s12.84-.83,13.1-1.07C51.09,138.62,82.6,104.72,116.64,73c8.89-8.29,66.23-59.5,77.47-70.13C196.17,1,194.24-1.08,192.39.66Z"></path>
                </symbol>
            </svg>

            <svg aria-hidden="true" width="0" height="0">
                <defs>
                    <linearGradient id="gradient" x1="194.94" y1="4.2" x2="11.72" y2="161.98" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#fff" stopOpacity="0.03"></stop>
                        <stop offset="100%" stopColor="var(--t-sun-color)"></stop>
                    </linearGradient>
                </defs>
            </svg>

            
        </div>
        
        </>
    )
}