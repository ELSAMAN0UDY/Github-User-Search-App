 import getMessage from "./getMessage";
import setLoadingState from "./setLoadingState";
import setMessage from "./setMessage";
import setSearchResult from "./setSearchResult";
 const  USER_API = "https://api.github.com/search/users?q=";
export const performSearch = (searchTerm , isUserSelected)=>{

    getMessage() && setMessage("");

    const typeQuery  = isUserSelected ? "+type:user": "+type:org";

    if(!searchTerm.trim()){
        setMessage("Please fill out the search filed");
        return;
    }

    setLoadingState(true);

    fetch(`${USER_API}${searchTerm}${typeQuery}`)
    .then(result => result.json())
    .then(response => setSearchResult(response.items)) 
    .finally(()=>setLoadingState(false))
}
export default performSearch;