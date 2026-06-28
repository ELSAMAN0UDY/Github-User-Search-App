import { alert } from "./elements";

export default function(message){
    alert.textContent= message ? `*${message}`:'';
}