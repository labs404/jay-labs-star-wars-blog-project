import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>People</h1>
			<ul className="list-group">
				{store.people.map((person, index) => {
					return (
						<li	key={index}>
							<b>Name:</b> {person.name} <br />
							<b>UID:</b> {person.uid} <br />
							<b>URL:</b> {person.url} <br />
						</li>
					);
				})}
			</ul>
			<br />
			<h1>Planets</h1>
			<ul className="list-group">
				{store.planets.map((planet, index) => {
					return (
						<li	key={index}>
							<b>Name:</b> {planet.name} <br />
							<b>UID:</b> {planet.uid} <br />
							<b>URL:</b> {planet.url} <br />
						</li>
					);
				})}
			</ul>
			<br />
			<h1>Vehicles</h1>
			<ul className="list-group">
				{store.vehicles.map((vehicle, index) => {
					return (
						<li	key={index}>
							<b>Name:</b> {vehicle.name} <br />
							<b>UID:</b> {vehicle.uid} <br />
							<b>URL:</b> {vehicle.url} <br />
						</li>
					);
				})}
			</ul>
			<br />

			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
