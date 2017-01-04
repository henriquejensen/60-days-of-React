import React from "react";
import { render } from "react-dom";

import Menu from "./components/Menu";
import Banner from "./components/Banner";
import Content from "./components/Content";
import Footer from "./components/Footer";

//Todo o componente criado em React é introduzido no template na forma de tags(estilo do JSX)
render(
	<div>
		{/*Renderizando o component menu e passando para ele uma array de nome items com dois objetos que serão mostrados como o menu*/}
		<Menu items={[
			{label: "Home", link:"/"},
			{label:"Project Source", link:"https://github.com/henriquejensen/60-days-of-React"}
		]}/>

		<Banner title="Project 60 days of code with React"/>

		<Content items={[
			{link:"https://github.com/henriquejensen/60-days-of-React/tree/master/day01", text:"day 1 - Create a Hello World with react and config the enviroment to boot the project"},
			{link:"https://github.com/henriquejensen/60-days-of-React/tree/master/day02", text: "day 2 - Create a Simple Website to show Component and Props in React"}
		]}/>

		<Footer 
			link="https://github.com/henriquejensen"
			name="Henrique Jensen" />
	</div>,
	document.getElementById("app")
)