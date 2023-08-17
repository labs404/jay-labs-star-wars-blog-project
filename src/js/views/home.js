import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => (
	<>
		<h1>Hello Tatooine!</h1>
		<Link to="/demo">
				<button className="btn btn-primary">Demo page</button>
		</Link>
	</>
);