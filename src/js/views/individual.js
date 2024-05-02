import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/individual.css";

export const Individual = () => {
    const { store } = useContext(Context);
    let params = useParams();
    let returnOutput = null;
    let individual = store[`${params.type}`][`${params.index}`]
    let peopleImgSrc = (
        params.index < 16 ? 
        "https://starwars-visualguide.com/assets/img/characters/"+ (Number(params.index) + 1) +".jpg"
        :
        "https://starwars-visualguide.com/assets/img/characters/"+ (Number(params.index) + 2) +".jpg"
    );    
    // "https://starwars-visualguide.com/assets/img/characters/"+ (Number(params.index) + 1) +".jpg";
    let planetsImgSrc = "https://starwars-visualguide.com/assets/img/planets/" + (Number(params.index) + 1) + ".jpg";
    let vehiclesImgSrc = "https://starwars-visualguide.com/assets/img/vehicles/" + (individual.url.split("https://swapi.py4e.com/api/vehicles/").pop()).slice(0, -1) + ".jpg"

    params.type === "people" ? (
        returnOutput = (
            <div className="container-fluid">
                <Link to={'/'}>
                    <div className="row">
                        <div className="col-4 text-center align-middle justify-content-center d-flex align-items-center">
                            <img 
                            src={peopleImgSrc}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
                            }} 
                            className="individual-img" 
                            alt={individual.name} 
                            />
                        </div>
                        <div className="col-8 text-start">
                            <div className="row"><h2 className="individual-h2">{individual.name}</h2></div>
                            <div className="row pt-2">
                                <h3 className="individual-h3-description">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo donec. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Tellus integer feugiat scelerisque varius morbi enim. Eu ultrices vitae auctor eu augue ut lectus. Ullamcorper malesuada proin libero nunc consequat. Aliquam vestibulum morbi blandit cursus. In hac habitasse platea dictumst. Mauris vitae ultricies leo integer malesuada nunc vel. Euismod in pellentesque massa placerat. Eget nulla facilisi etiam dignissim diam. 
                                </h3>
                                <h3 className="individual-h3-description">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Quis imperdiet massa tincidunt nunc. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Nullam ac tortor vitae purus faucibus ornare suspendisse. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Sit amet justo donec enim diam vulputate ut pharetra sit. Maecenas ultricies mi eget mauris. Bibendum est ultricies integer quis. Tincidunt arcu non sodales neque sodales ut etiam. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Ut morbi tincidunt augue interdum. 
                                </h3>   
                                <h3 className="individual-h3-description">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Magna fermentum iaculis eu non diam phasellus vestibulum. Magna etiam tempor orci eu lobortis. Tristique senectus et netus et. Elit ut aliquam purus sit amet luctus venenatis. Pellentesque sit amet porttitor eget dolor morbi non arcu. Tincidunt eget nullam non nisi est. Lacus laoreet non curabitur gravida arcu ac. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Nisi vitae suscipit tellus mauris a. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Ultrices eros in cursus turpis massa tincidunt.
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-2 text-center individual-col">
                            <h3 className="individual-h3">eye color</h3>
                            <p className="individual-p">{individual.eye_color}</p>
                        </div>
                        <div className="col-2 text-center individual-col">
                            <h3 className="individual-h3">height</h3>
                            <p className="individual-p">{individual.height}</p>
                        </div>
                        <div className="col-2 text-center individual-col">
                            <h3 className="individual-h3">hair color</h3>
                            <p className="individual-p">{individual.hair_color}</p>
                        </div>
                        <div className="col-2 text-center individual-col">
                            <h3 className="individual-h3">mass</h3>
                            <p className="individual-p">{individual.mass}</p>
                        </div>
                        <div className="col-2 text-center individual-col">
                            <h3 className="individual-h3">birth year</h3>
                            <p className="individual-p">{individual.birth_year}</p>
                        </div>
                        <div className="col-2 text-center individual-col-right">
                            <h3 className="individual-h3">gender</h3>
                            <p className="individual-p">{individual.gender}</p>
                        </div>
                    </div>
                    <div className="spacer row">
                        &nbsp;<br />&nbsp;<br />&nbsp;<br />
                    </div>
                </Link>
            </div>
        )
    ) : null

    params.type === "planets" ? (
        returnOutput = (
            <div className="container-fluid">
                <Link to={'/'}>
                    <div className="row">
                        <div className="col-5 text-center align-middle justify-content-center d-flex align-items-center">
                            <img 
                            src={planetsImgSrc}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
                            }} 
                            className="individual-img" 
                            alt={individual.name} 
                            />
                        </div>
                        <div className="col-7 text-start">
                            <div className="row"><h2 className="individual-h2">{individual.name}</h2></div>
                            <div className="row pt-2">
                                <h3 className="individual-h3-description">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo donec. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Tellus integer feugiat scelerisque varius morbi enim. Eu ultrices vitae auctor eu augue ut lectus. Ullamcorper malesuada proin libero nunc consequat. Aliquam vestibulum morbi blandit cursus. In hac habitasse platea dictumst. 
                                </h3>
                                <h3 className="individual-h3-description">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Quis imperdiet massa tincidunt nunc. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Nullam ac tortor vitae purus faucibus ornare suspendisse. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Sit amet justo donec enim diam vulputate ut pharetra sit. Maecenas ultricies mi eget mauris. Bibendum est ultricies integer quis. 
                                </h3>   
                                <h3 className="individual-h3-description">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Magna fermentum iaculis eu non diam phasellus vestibulum. Magna etiam tempor orci eu lobortis. Tristique senectus et netus et. Elit ut aliquam purus sit amet luctus venenatis. Pellentesque sit amet porttitor eget dolor morbi non arcu. Tincidunt eget nullam non nisi est. Lacus laoreet non curabitur gravida arcu ac. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Nisi vitae suscipit tellus mauris a. 
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-2 text-center individual-col">
                            <h3 className="individual-h3">population</h3>
                            <p className="individual-p">{individual.population}</p>
                        </div>
                        <div className="col-2 text-center individual-col">
                            <h3 className="individual-h3">terrain</h3>
                            <p className="individual-p">{individual.terrain}</p>
                        </div>
                        <div className="col-2 text-center individual-col">
                            <h3 className="individual-h3">climate</h3>
                            <p className="individual-p">{individual.climate}</p>
                        </div>
                        <div className="col-2 text-center individual-col">
                            <h3 className="individual-h3">gravity</h3>
                            <p className="individual-p">{individual.gravity}</p>
                        </div>
                        <div className="col-2 text-center individual-col">
                            <h3 className="individual-h3">rotation_period</h3>
                            <p className="individual-p">{individual.rotation_period}</p>
                        </div>
                        <div className="col-2 text-center individual-col-right">
                            <h3 className="individual-h3">orbital_period</h3>
                            <p className="individual-p">{individual.orbital_period}</p>
                        </div>
                    </div>
                    <div className="spacer row">
                        &nbsp;<br />&nbsp;<br />&nbsp;<br />
                    </div>
                </Link>
            </div>
        )
    ) : null

    params.type === "vehicles" ? (
        returnOutput = (
            <div className="container-fluid">
                <Link to={'/'}>
                    <div className="row">
                        <div className="col-6 text-center align-middle justify-content-center d-flex align-items-center">
                            <img 
                            src={vehiclesImgSrc}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
                            }} 
                            className="individual-img" 
                            alt={individual.name} 
                            />
                        </div>
                        <div className="col-6 text-start">
                            <div className="row"><h2 className="individual-h2">{individual.name}</h2></div>
                            <div className="row pt-2">
                                <h3 className="individual-h3-description">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet justo donec. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Tellus integer feugiat scelerisque varius morbi enim. Eu ultrices vitae auctor eu augue ut lectus. Ullamcorper malesuada proin libero nunc consequat. Aliquam vestibulum morbi blandit cursus. In hac habitasse platea dictumst. 
                                </h3>
                                <h3 className="individual-h3-description">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Quis imperdiet massa tincidunt nunc. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Nullam ac tortor vitae purus faucibus ornare suspendisse. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Sit amet justo donec enim diam vulputate ut pharetra sit. Maecenas ultricies mi eget mauris. Bibendum est ultricies integer quis. 
                                </h3>   
                                <h3 className="individual-h3-description">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Magna fermentum iaculis eu non diam phasellus vestibulum. Magna etiam tempor orci eu lobortis. Tristique senectus et netus et. Elit ut aliquam purus sit amet luctus venenatis. Pellentesque sit amet porttitor eget dolor morbi non arcu. Tincidunt eget nullam non nisi est. Lacus laoreet non curabitur gravida arcu ac. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Nisi vitae suscipit tellus mauris a. 
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-2 text-center individual-col">
                            <h3 className="individual-h3">model</h3>
                            <p className="individual-p">{individual.model}</p>
                        </div>
                        <div className="col-2 text-center individual-col">
                            <h3 className="individual-h3">vehicle class</h3>
                            <p className="individual-p">{individual.vehicle_class}</p>
                        </div>
                        <div className="col-2 text-center individual-col">
                            <h3 className="individual-h3">manufacturer</h3>
                            <p className="individual-p">{individual.manufacturer}</p>
                        </div>
                        <div className="col-2 text-center individual-col">
                            <h3 className="individual-h3">length</h3>
                            <p className="individual-p">{individual.length}</p>
                        </div>
                        <div className="col-2 text-center individual-col">
                            <h3 className="individual-h3">max atmosphering speed</h3>
                            <p className="individual-p">{individual.max_atmosphering_speed}</p>
                        </div>
                        <div className="col-2 text-center individual-col-right">
                            <h3 className="individual-h3">cargo capacity</h3>
                            <p className="individual-p">{individual.cargo_capacity}</p>
                        </div>
                    </div>
                    <div className="spacer row">
                        &nbsp;<br />&nbsp;<br />&nbsp;<br />
                    </div>
                </Link>
            </div>
        )
    ) : null

    return (
        <div>
            {returnOutput}
        </div>
    );
};