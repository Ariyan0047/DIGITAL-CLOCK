import "./css/style.css";
import DigitalClock from "./js/clock.js"

const clock = new DigitalClock()
setInterval(clock.updateClock, 1000)