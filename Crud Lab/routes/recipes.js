const express = require("express");
const app = express();
const Recipe = require("../models/Recipe");

//Page that contains all of the recipes
app.get("/recipes", (request, response) => {
    Recipe
        .find()
        .then((recipeData) => {
            response.render('recipes', {recipeHbs: recipeData});
        })
        .catch((error) => {
            response.send("error", error);
        });
});

//Loads the detail page of your chosen recipe
app.get('/recipes/detail/:recipeId', (request, response) => {
    Recipe
        .findById(request.params.recipeId)
        .then((recipeData) => {
            response.render('../views/detail', {recipeHbs: recipeData});
        })
        .catch((error) => {
            response.send("error", error);
        });
});

//You can delete your recipe
app.get('/recipes/delete/:recipeId', (request, response) => {
    debugger
    Recipe
        .findByIdAndDelete(request.params.recipeId)
        .then((recipeData) => {
            response.redirect("/recipes");
        })
        .catch((error) => {
            response.send("error", error);
        });
});

//Page where you can add your own recipes
// app.get("/recipes/create/:recipeId", (request, response) => {
//     Recipe
//         .findById(req.params.recipeId)
//         .then((recipeData) => {
//             response.render('../views/add', {recipeHbs: recipeData});
//         })
//         .catch((error) => {
//             response.send(error);
//         });
// });

// app.post("/recipes/create", (request, response) => {
//     Recipe
//         .create({

//         })
//         .then((recipeData) => {
//             // res.redirect(`/recipe/detail/${recipe._id}`)
//             res.redirect(`/views/detail/${recipe._id}`);
//         })
//         .catch((error) => {
//             res.send("error")
//         })
// })

app.get("/recipes/create", (request,response)=> {
    response.render("add");
});

app.post("/recipes/create", (request,response)=> {
    console.log(request.body);
    Recipe
        .create({
            title: request.body.title,
            level: request.body.level,
            cuisine: request.body.cuisine,
            dishType: request.body.dishType,
            duration: request.body.duration
        })
        .then(()=> {
            response.redirect(`/recipe/detail/${recipe._id}`);
        })
        .catch((err)=> {
            response.send("error");
        })
})

//Page where you can update the recipe
app.get("/recipes/update", (req,res)=> {
    Recipe
        .findById(req.params.id)
        .then((recipeData)=> {
            res.render("update", {recipeHbs: recipeData});
        })
        .catch((err)=> {
            res.send("Error");
        })
})

app.post("/recipes/update", (req,res)=> {
    Recipe
        .findByIdAndUpdate(req.params.id,{
            title: req.body.title,
            level: req.body.level,
            cuisine: req.body.cuisine,
            dishType: req.body.dishType,
            duration: req.body.duration
        })
        .then((recipeData)=> {
            res.redirect(`/recipe/detail/${recipe._id}`);
        })
        .catch((err)=> {
            res.send("err");
        })
})

module.exports = app;