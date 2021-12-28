import { Movie } from "../models/movieInterface"; //Import move interface and express
import express from "express"
const movieRoutes = express.Router() //Setting up route with express.Router()

const MoviesList: Movie[] = [
    {id:1, title:"Lion King", year:1994, animated: true },
    {id:2, title:"Toy story", year:1995, animated: true },
    {id:3, title:"Avengers", year:2012, animated: false }, //Create movie list (Jurassic Park is the best one)
    {id:4, title:"Jurassic Park", year:1993, animated: false },
    {id:5, title:"Black Panther", year:2018, animated: false }
];

movieRoutes.get("/", function(req,res){
    res.json(MoviesList)
})


movieRoutes.get("/:id", function(req, res) {
    
    MoviesList.filter(movie => {if(movie.id === Number.parseInt(req.params.id)){
       res.json(movie)
       
    }}) 
    res.status(404); 
    res.send({"error": `Movie with id of ${Number.parseInt(req.params.id)} doesn't exist dawg :( `});
});


export default movieRoutes