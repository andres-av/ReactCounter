//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

//render your react application

let seconds = 0;


setInterval(() => {
    seconds++;
    let one = Math.floor(seconds / 1);
    let two = Math.floor(seconds / 10);
    let three = Math.floor(seconds / 100);
    let four = Math.floor(seconds / 1000);
    let five = Math.floor(seconds / 10000);
    let six = Math.floor(seconds / 100000);


    ReactDOM.render(<SecondsCounter one={one} two={two} three={three} four={four} five={five} six={six}/>, document.querySelector("#app"));
}, 1000)


