import express from "express"
import movieRoutes from "./routes/movieRoute"
import cartRoute from "../src/routes/cartapiRoute"
const app = express()

const port = 3002


// app.use("/api/movies", movieRoutes)
app.use("/cart-items/", cartRoute)





app.listen(port,function(){ //run the server we have to "listen" to the sever.
    console.log(`Listening on ${port}`);
})