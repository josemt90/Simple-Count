import React from "react";
import PropType from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const divStyles = {
	width: "10rem",
	height: "15rem",
	margin: "3px",
};

const Styles = {
	fontSize: "200px",
};

const iconStyle = {
	fontSize: "140px",
};

const divPrincipal = {
	background: "black",
};

const SecondsCounter = (props) => {
	return (
		<div
			style={divPrincipal}
			className="d-flex justify-content-center rounded-3 m-4 p-4">
			<div className=" bg-dark text-center rounded-3  " style={divStyles}>
				<h1 style={iconStyle} className=" text-white mt-4">
					<FontAwesomeIcon icon={faClock} />
				</h1>
			</div>
			<div className=" bg-dark text-center rounded-3" style={divStyles}>
				<h1 style={Styles} className=" text-white">
					{props.num1}
				</h1>
			</div>
			<div className=" bg-dark text-center rounded-3" style={divStyles}>
				<h1 style={Styles} className=" text-white">
					{props.num2}
				</h1>
			</div>
			<div className=" bg-dark text-center rounded-3" style={divStyles}>
				<h1 style={Styles} className=" text-white">
					{props.num3}
				</h1>
			</div>
			<div className=" bg-dark text-center rounded-3" style={divStyles}>
				<h1 style={Styles} className=" text-white">
					{props.num4}
				</h1>
			</div>
			<div className=" bg-dark text-center rounded-3" style={divStyles}>
				<h1 style={Styles} className=" text-white">
					{props.num5}
				</h1>
			</div>
			<div className=" bg-dark text-center rounded-3" style={divStyles}>
				<h1 style={Styles} className=" text-white">
					{props.num6}
				</h1>
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	num1: PropType.number,
	num2: PropType.number,
	num3: PropType.number,
	num4: PropType.number,
	num5: PropType.number,
	num6: PropType.number,
};

export default SecondsCounter;
