import React from "react";

const SecondsCounter = ({one, two, three, four, five, six}) => {
 return (
	<>
	<p>{one%10}</p>
	<p>{two%10}</p>
	<p>{three%10}</p>
	<p>{four%10}</p>
	<p>{five%10}</p>
	<p>{six%10}</p>
	</>
 )
};


export default SecondsCounter;
