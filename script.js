//  create function => persormSearch ( searchTerm, isUserSelected);
// call performSearch inside button eventListener;
/*
    perform search
1- fetch data from url()
2- if ok then show in page
3- id no show error message
*/
import elements from "./scripts/elements"; 
import performSearch from  "./scripts/performSearch";

buttonElement.addEventListener("click",(e)=>{
    e.preventDefault();
performSearch(searchInput.value,usersInputElement.checked);
})