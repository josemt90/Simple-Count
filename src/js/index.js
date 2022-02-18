//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

import SecondsCounter from "./component/secondsCounter.jsx";

var dig6 = 0;
var dig5 = 0;
var dig4 = 0;
var dig3 = 0;
var dig2 = 0;
var dig1 = 0;

const count = () => {
	dig6++;
	if (dig6 === 10) {
		dig6 = 0;
		dig5++;
	}

	if (dig5 === 10) {
		dig5 = 0;
		dig4++;
	}
	if (dig4 === 10) {
		dig4 = 0;
		dig3++;
	}
	if (dig3 === 10) {
		dig3 = 0;
		dig2++;
	}
	if (dig2 === 10) {
		dig2 = 0;
		dig1++;
	}
	if (dig1 === 10) {
		dig1 = 0;
	}
};

//render your react application
function numero() {
	ReactDOM.render(
		<SecondsCounter
			num6={dig6}
			num5={dig5}
			num4={dig4}
			num3={dig3}
			num2={dig2}
			num1={dig1}
		/>,
		document.querySelector("#app")
	);

	count();
}

setInterval(numero, 1000);
