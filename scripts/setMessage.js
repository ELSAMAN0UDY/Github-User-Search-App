import { alert } from "./elements.js";

export default function(message){
    alert.textContent= message ? `*${message}`:'';
}