import React from "react";

export default function Card(props) {

    return(
        <div className="card">
            <img src={props.item.placeImg} alt="img" className="card--img"></img>
            <div className="info">
                <div className="location">
                    <span className="Country">{props.item.country}</span>
                    <a href={props.item.googleMaps}>View on Google Maps</a>
                </div>
                <h1 className="placeName">{props.item.placeName}</h1>
                <p className="bold">{props.item.dates}</p>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
    
}