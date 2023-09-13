import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-dark bg-dark mb-3 sticky-top">
			<Link to="/">
				<span className="navbar-title navbar-brand mb-0 h1 ms-4"><img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" className="navbar-img" />Jay's Star Wars Blog Project</span>
			</Link>
			<div className="ml-auto">
				<div className="ml-auto">
					<div className="dropdown">
						<div className="btn-group">
							<button type="button" className="btn btn-danger">Favorites</button>
							<button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split me-4" data-bs-toggle="dropdown" aria-expanded="false">
								<span className="visually-hidden">Toggle Dropdown</span>
							</button>
							<ul className="dropdown-menu dropdown-menu-end me-4">
							{store.favorites.length == 0 ? 
								<center>Empty!</center>
								: 
								(store.favorites.map((item, index) => {
								return (
									<li key={index}>
										<div className=" container container-fluid">
											<div className="list-item d-flex align-items-center m-1">
												<div className="flex-fill text-start">{item}</div>
												<div className="flex-fill text-end">
													<button className="btn btn-secondary" onClick={() => actions.removeFromFavorites(item)}>
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
															<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
														</svg>
													</button>
												</div>
											</div>
										</div> 
									</li>
								);
							}))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};