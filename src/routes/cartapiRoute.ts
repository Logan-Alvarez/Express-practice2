import expres, { Router } from "express";
import { Cart } from "../models/cartInterface"; //Made an interface to make an outline for the array.
const cartRoute = expres.Router(); //Set up the route to the cartAPI using express.Router().

const cartArray:Cart[] = [
{id:1, product:"shoes", price:30,quantity:3},
{id:2, product:"dvd", price:10,quantity:30},
{id:3, product:"watch", price:89,quantity:1},
{id:4, product:"sweat shirt", price:65,quantity:2}];

cartRoute.get("/", function(req, res){ //Set up the function with the request and response.
    res.json(cartArray) //We want the response to return the cartArray for our user.
    res.status(200) //Send a response code of "200" means OK.
});

cartRoute.get("/:id", function(req,res){
    cartArray.filter(item => {if(item.id === parseInt(req.params.id) ){
        res.json(item);
        res.status(200);
    }})
    res.status(404)
    res.send("ID Not Found")
});

cartRoute.get("/", function (req,res){
    let maxPriceQ:string = req.query.maxPrice as string
    if(maxPriceQ){
        let maxPrice:number = parseInt(maxPriceQ)
        cartArray.filter(item => item.price <= maxPrice)
        res.json("it worked")
    }
    else{
        res.json("It didn't work")
    }

});

cartRoute.get("/", function(req,res){
    let preFixQ:string = req.query.prefix as string
    if(preFixQ){
        let filtered
    }
})

let nextID:number = 5; //Create new id for the new item
cartRoute.post("/", function(req,res){
    let newItem:Cart = req.body //create variabel for the new item and give it the type of Cart
    newItem.id = nextID; //Because the newItem is of type Cart, it should have a id. assigne the id using the created id variabel
    nextID += 1  //Increment the value to go up by one everytime an item is created.
    cartArray.push(newItem) // push the new item, with the now assigned id, into the array of items
    res.status(201) //Status code for "created item"
    res.send("Item created") //Messaging using that the item was created
    res.json(newItem) //Check if the newItem is there in the list
});


cartRoute.put("/:id", function(req,res){
    cartArray.forEach(item => {if(item.id === parseInt(req.params.id)){
        item.price = 10
    }})
    res.status(200)
    // res.send("Item was updated")
    res.json(cartArray)
});

cartRoute.delete("/:id", function(req,res){
   let itemIndex:number = cartArray.findIndex(item => item.id === parseInt(req.params.id))
    cartArray.splice(itemIndex,1)
    res.status(204) //No content code
    res.json(cartArray)
    
});

export default cartRoute