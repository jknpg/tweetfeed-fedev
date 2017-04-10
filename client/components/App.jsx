/*
    ./client/components/App.jsx
*/
import React from "react";
import ReactDOM from "react-dom";
import Menu from "./Menu.jsx";
import Responsive from "./Responsive.jsx";
import CategorizedList from "./CategorizedList.jsx"

export default class App extends React.Component {ㅊ
	renderCategorizedList(){
		return <CategorizedList wrapperType="post"/>
	}
	renderMain(isMenuOnRightSide){
		const mainStyle = {
		  "order":(isMenuOnRightSide?0:1)
		};
		return (
			<div className="main" style={mainStyle}>
				<Responsive/>
			</div>
		)
	}
	renderSide(isMenuOnRightSide,menuWidth){
		const sideStyle = {
		  "order":(isMenuOnRightSide?1:0),
		  "minWidth":menuWidth,
		};
		const domainParking={
			buttonName:"Inquire"
		}
		return (
			<div className="side" style={sideStyle}>
				<Menu 
					fixedTop={false}
					fixedHeight={80}
					width={sideStyle.minWidth} 
					buttonName={domainParking.buttonName} 
					isMenuOnRightSide={isMenuOnRightSide} 
					isCollapsed> 
					<CategorizedList wrapperType="post"/>
		  	</Menu>
			</div>
		)
	}
	render() {
		var isMenuOnRightSide=false;
		var menuWidth=400;
		return (
			<div className="app">
				{this.renderMain(isMenuOnRightSide)}
				{this.renderSide(isMenuOnRightSide, menuWidth)}
			</div>
		);
	}
}
