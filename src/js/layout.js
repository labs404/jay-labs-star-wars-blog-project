import React from "react";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Home } from "./views/home";
import { Individual } from "./views/individual";

const Layout = () => {
	const basename = process.env.BASENAME || "";
	return (
		<div className="container-fluid">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/individual/:type/:index" element={<Individual />} /> 
						<Route path="*" element={<h1>Error: 404!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);