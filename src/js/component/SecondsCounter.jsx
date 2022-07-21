import React from "react";

import { FaClock } from 'react-icons/fa'

const SecondsCounter = ({one, two, three, four, five, six}) => {
 return (
	<>
	<section className="counterContainer">
		<div className="counterdigit">{one%10}</div>
		<div className="counterdigit">{two%10}</div>
		<div className="counterdigit">{three%10}</div>
		<div className="counterdigit">{four%10}</div>
		<div className="counterdigit">{five%10}</div>
		<div className="counterdigit">{six%10}</div>
		<div className="counterdigit iconClock"><FaClock></FaClock></div>
	</section>
	</>
 )
};


export default SecondsCounter;
