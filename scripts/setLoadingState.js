import { loder } from "./elements";
import setSearchResult from "./setSearchResult";

export default function(loadingStat){
    loder.classList.toggle('hidden', !loadingStat);
    loadingStat && setSearchResult(null);
}