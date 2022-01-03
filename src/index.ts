import express from "express";
// import movieRoutes from "./routes/movieRoute";
import cartRoute from "../src/routes/cartapiRoute";
import cors from "cors";

const app = express();
app.use(express.json());
const port = 3000;
app.use(cors());

//ROUTES
// app.use("/api/movies", movieRoutes)
app.use("/cart-items", cartRoute);

//Listening on our port that we created.
app.listen(port, function () {
  //run the server we have to "listen" to the sever.
  console.log(`Listening on ${port}`);
});
