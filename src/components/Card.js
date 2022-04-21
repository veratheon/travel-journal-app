import React from "react";

export default function Card(props) {

    return(
        <div className="card">
            <img src={props.item.placeImg} alt="img" className="card--img"></img>
            <div className="info">
                <img src="Fill 219.svg" alt="point" className="point"></img>
                <span className="Country">{props.item.country}</span>
                <a href={props.item.googleMaps} target="_blank" className="googleMaps">View on Google Maps</a>
                <h2 className="placeName">{props.item.place}</h2>
                <p className="bold">{props.item.dates}</p>
                <p className="review">{props.item.description}</p>
            </div>
        </div>
    )
    
}