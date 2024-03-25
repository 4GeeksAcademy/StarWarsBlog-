import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";


import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const CharacterData = () => {
    const {id} = useParams()

    const [characterData, setCharacterData] = useState(null)

    const fetchSingleCharacterData = async () => {
        const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
        const data = await response.json()
        setCharacterData(data.result)
        
    }

    useEffect(() => {
        fetchSingleCharacterData()
    },[])


    return<>
        <div className=" container d-flex justify-content-center gap-5">
            <img className="mx-5 alto-img" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>
            {characterData && 
                <div className="mx-5">
                    <h1 className="text-center">{characterData.properties.name}</h1>
                    <p>{characterData.description}</p>
                </div>
            }


        </div>
        <div>
            <div className="container line d-flex justify-content-center">

                <div className="mx-5">
                    <div className="mt-3">
                        <p className="text-danger m-0 ">Name</p>
                        <p className="text-danger m-0">Luke SkyWalker</p>
                    </div>
                </div>

                <div className="mx-5">
                    <div className="mt-3">
                        <p className="text-danger m-0 ">Birth Year</p>
                        <p className="text-danger m-0">19BBY</p>
                    </div>
                </div>

                <div className="mx-5">
                    <div className="mt-3">
                        <p className="text-danger m-0 ">Gender</p>
                        <p className="text-danger m-0">male</p>
                    </div>
                </div>

                <div className="mx-5">
                    <div className="mt-3">
                        <p className="text-danger m-0 ">height</p>
                        <p className="text-danger m-0">172</p>
                    </div>
                </div>

                <div className="mx-5">
                    <div className="mt-3">
                        <p className="text-danger m-0 ">Skin Color</p>
                        <p className="text-danger m-0">fair</p>
                    </div>
                </div>

                <div className="mx-5">
                    <div className="mt-3">

                        <p className="text-danger m-0 ">Eye Color</p>
                        <p className="text-danger m-0">blue</p>
                    </div>
                </div>
                
            </div>
        </div>
    </>
}
