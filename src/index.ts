import express from "express"
import movieRoutes from "./routes/movieRoute"
const app = express()

const port = 3002


app.use("/api/movies", movieRoutes)





app.listen(port,function(){ //run the server
    console.log(`Listening on ${port}`);
})