/* eslint-disable react-hooks/set-state-in-effect */
import axios from "axios";
import { useEffect,useState } from "react";
import { Card } from "../component/UI/Card";

export const Movie = () => {
    const[data,setData] = useState([]);

    const API ="https://www.omdbapi.com/?i=tt389618&apikey=1c12799f&s=titanic&page=1";

    const getMovieData = async () => {
        try {
            const res = await axios.get(API);
            console.log(res.data.Search);
            setData(res.data.Search);
        } catch (error) {
            console.log(error);
        }
    };   
useEffect(() => {
    getMovieData();
}, []);

return(
    <ul className="container grid grid-four--cols">
    {
        data.map((curElem)=>{
            return <Card key= {curElem.imdbID} movieData={curElem}/>;

        })}
    </ul>

)

            
}