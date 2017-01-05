import React from "react";
import { render } from "react-dom";

import Menu from "./components/Menu";
import Content from "./components/Content";
import Footer from "./components/Footer";

//Todo o componente criado em React é introduzido no template na forma de tags(estilo do JSX)
render(
	<div style={{height:"100%", backgroundColor:"#e9ebee"}}>
		{/*Renderizando o component menu e passando para ele uma array de nome items com dois objetos que serão mostrados como o menu*/}
		<Menu items={[
			{label: "Home", link:"/"},
			{label:"Project Source", link:"https://github.com/henriquejensen/60-days-of-React"}
		]}/>

		<Content />

		<Footer 
			link="https://github.com/henriquejensen"
			name="Henrique Jensen" />
	</div>,
	document.getElementById("app")
)