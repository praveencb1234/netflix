 import { Api_Key } from "./Api-Key/Api_Key"
 
 export const Search=`https://api.themoviedb.org/3/search/movie?api_key=${Api_Key}&query=iron`
 
 export const Romance=`https://api.themoviedb.org/3/discover/movie?api_key=${Api_Key}&with_genres=10749`


 export const Action=`https://api.themoviedb.org/3/discover/movie?api_key=${Api_Key}&with_genres=28`
 export const Horror=`https://api.themoviedb.org/3/discover/movie?api_key=${Api_Key}&with_genres=27`
 export const Comedy= `https://api.themoviedb.org/3/discover/movie?api_key=${Api_Key}&with_genres=35`
 export const Doc=`https://api.themoviedb.org/3/discover/movie?api_key=${Api_Key}&with_genres=99`
 export const Tr=`https://api.themoviedb.org/3/trending/all/week?api_key=${Api_Key}&language=en-US`