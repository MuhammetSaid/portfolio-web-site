import React, { useEffect, useState } from 'react'
import "./Statistics.css"
import axios from 'axios';
import ViewsCard from '../../Components/ViewsCard/ViewsCard';


export default function Statistics({totalVisits}) {
    
    return (
        <>
            <div className="main-statistics">
                <div className="main-statistics-content">
                    <div className="views-cards">
                        <ViewsCard name={"Total"} totalVisits = {totalVisits} color="red" color2 = "rgba(255, 0, 0, 0.305)"/>
                        <ViewsCard name={"Total"} totalVisits = {totalVisits} color="green" color2 = "rgba(0, 128, 0, 0.316)"/>
                        <ViewsCard name={"Total"} totalVisits = {totalVisits} color="orange" color2 = "rgba(255, 166, 0, 0.305)"/>
                        <ViewsCard name={"Total"} totalVisits = {totalVisits} color="blue" color2 = "rgba(0, 0, 255, 0.3)"/>
                    </div>
                    .
                </div>
            </div>
        </>
    )
}
