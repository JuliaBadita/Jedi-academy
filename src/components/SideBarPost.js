import React from "react"
import Grid from '@mui/material/Grid';
import SaberButton from './SaberButton';
import starWars from '../images/star-wars.jpg'
import goldSeparator from '../images/gold-separator.svg'
import PreviousNextButton from "./PreviousNextButton";

export default function SideBarPost(){

    return (
        <Grid item xs={12} md={4} className="sideBarPost">
            <div className="separator"><img src={goldSeparator} alt="gold separator"/></div>
            <div className="content"><span className="title"><h2>Autres infos utiles</h2></span>
            <article className="card">
                <div className="thumb" style={{backgroundImage: `url(${starWars})`, backgroundRepeat: 'no-repeat', backgroundPosition:'center'}}></div>
                <div className="infos">
                    <h3 className="title">C'est quoi Star Wars ?</h3>
                    <PreviousNextButton isNext="true" text="Go !" onClick="location.href='https://google.com';" width="small" />
                </div>
            </article>
            <article className="card">
                <div className="thumb" style={{backgroundImage: `url(${starWars})`, backgroundRepeat: 'no-repeat', backgroundPosition:'center'}}></div>
                <div className="infos">
                    <h3 className="title">C'est quoi Star Wars ?</h3>
                    <SaberButton link="" text="Go !" />
                </div>
            </article>
            <article className="card">
                <div className="thumb" style={{backgroundImage: `url(${starWars})`, backgroundRepeat: 'no-repeat', backgroundPosition:'center'}}></div>
                <div className="infos">
                    <h3 className="title">C'est quoi Star Wars ?</h3>
                    <SaberButton link="" text="Go !" />
                </div>
            </article>
            </div>
        </Grid>
    );
}