import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";


import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const PlanetsData = () => {
    const {id} = useParams()

    const [planetsData, setPlanetsData] = useState(null)

    const fetchSinglePlanetsData = async () => {
        const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
        const data = await response.json()
        setPlanetsData(data.result)
        
    }

    useEffect(() => {
        fetchSinglePlanetsData()
    },[])


    return(
        <div className=" container d-flex justify-content-center gap-5">
            <img className="mx-5 alto-img" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>
            {planetsData && 
                <div className="mx-5">
                    <h1>{planetsData.properties.name}</h1>
                    <p>{planetsData.description}</p>
                    <p>{planetsData.properties.gender}</p>
                </div>
            }


        </div>
    )
}
