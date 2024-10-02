import React from 'react'
import "./ViewsCard.css"
import { FaChartBar } from 'react-icons/fa'
import { RiBarChartGroupedFill } from "react-icons/ri";

export default function ViewsCard({name , totalVisits , color ,color2}) {
  return (
    <>
        <div className="mian-views-card">
            <div className="main-views-card-content">
                <h4>{name} Visits: </h4>
                <div className="visit-count">
                  <RiBarChartGroupedFill fill={color} className='aaaa' style={{fill:{color},color:{color} , fontSize:"30px"}}/>
                  <h4 className='visit-h4' style={{color:color , backgroundColor:color2}}>{totalVisits}</h4>
                </div>
            </div> 
        </div>
    </>
  )
}
