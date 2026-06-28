import { loder } from "./elements.js";
import setSearchResult from "./setSearchResult.js";

export default function(loadingStat){
    loder.classList.toggle('hidden', !loadingStat);
    loadingStat && setSearchResult(null);
}