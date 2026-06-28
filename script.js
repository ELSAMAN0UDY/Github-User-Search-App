//  create function => persormSearch ( searchTerm, isUserSelected);
// call performSearch inside button eventListener;
/*
    perform search
1- fetch data from url()
2- if ok then show in page
3- id no show error message
*/
import {buttonElement,searchInput,usersInputElement,cardsElement,alert,loder} from "./scripts/elements.js"; 
import performSearch from  "./scripts/performSearch.js";

buttonElement.addEventListener("click",(e)=>{
    e.preventDefault();
performSearch(searchInput.value,usersInputElement.checked);
})