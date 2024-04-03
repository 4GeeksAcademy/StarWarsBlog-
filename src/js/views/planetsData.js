import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";


import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const PlanetsData = () => {
    const { id } = useParams()

    const [planetsData, setPlanetsData] = useState(null)

    const fetchSinglePlanetsData = async () => {
        const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
        const data = await response.json()
        setPlanetsData(data.result)

    }

    useEffect(() => {
        fetchSinglePlanetsData()
    }, [])


    return <>
        <div className=" container d-flex justify-content-center gap-4">
            <img className="mx-5 alto-img" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
            {planetsData &&
                <div className="mx-5">
                    <h1 className="text-center">{planetsData.properties.name}</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            }


        </div>


        <div>
            <div className="container line d-flex justify-content-center">

                <div className="mx-5">
                    <div className="mt-3">
                        <p className="text-danger m-0 ">Name</p>
                        <p className="text-danger m-0">{planetsData && planetsData.properties.name}</p>
                    </div>
                </div>

                <div className="mx-5">
                    <div className="mt-3">
                        <p className="text-danger m-0 ">Climate</p>
                        <p className="text-danger m-0">{planetsData && planetsData.properties.climate}</p>
                    </div>
                </div>

                <div className="mx-5">
                    <div className="mt-3">
                        <p className="text-danger m-0 ">Population</p>
                        <p className="text-danger m-0">{planetsData && planetsData.properties.population}</p>
                    </div>
                </div>

                <div className="mx-5">
                    <div className="mt-3">
                        <p className="text-danger m-0 ">Orbital Period</p>
                        <p className="text-danger m-0">{planetsData && planetsData.properties.orbital_period}</p>
                    </div>
                </div>

                <div className="mx-5">
                    <div className="mt-3">
                        <p className="text-danger m-0 ">Rotation Period</p>
                        <p className="text-danger m-0">{planetsData && planetsData.properties.rotation_period}</p>
                    </div>
                </div>

                <div className="mx-5">
                    <div className="mt-3">

                        <p className="text-danger m-0 ">Diameter</p>
                        <p className="text-danger m-0">{planetsData && planetsData.properties.diameter}</p>
                    </div>
                </div>

            </div>
        </div>
    </>
}
