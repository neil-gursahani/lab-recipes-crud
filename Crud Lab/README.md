# LAB RECIPES CRUD

- [x] Database, webserver[x], dynamic views [x], front-end [x] connecting all of them? []

During the punkAPI LAB you practice creating views based on data coming from the API. With the recipes LAB you practice how to create, read, update and delete documents in the mongo database. Now we would like to read recipes from the mongoDB and pass them to handlebars. We would also like to send a new recipes from the front-end to the webserver and store it in the db so that the user can retrieve it later. We would also like be edit a recipe or remove one if we're not happy with it.

## Iteration 1 (READ)
Create a route that renders all the recipes in the database. Only show basic info, like the title, cuisine and the picture. First, use the mongoose model of the database. Second, read all the recipes from the database and pass them as an argument to the render method. Render all of them using a recipe partial and the ``{{# each}}`` hbs loop. Give this route a logical name like `/recipes`.

## Iteration 2 (READ)
Create a route that renders the detail information of a particular recipe you clicked on. The route should show all the information of the recipe. So in addition to the title, cuisine and the picture, it shows the info of creator, duration, ingredients and the other fields. First, make the recipes clickable by wrapping a link around it. The ObjectId should be part of the link as a query string. Give this route a logical name like `/recipes/:id`. Within that route you query mongoDB for a single recipe, which you pass to the render method.

## Iteration 3 (DELETE)
Make a route that deletes a recipe if you click on a delete button. This works similar as Iteration 2 in the sense that you want to send an ObjectId to the webserver, but this time you are not using the ObjectId and the model to find a recipe, but to delete one. Redirect to the list of recipes after you've deleted one.

## Iteration 4 (CREATE)
Create a route that renders a form. Through that form you send a post request. Let the route that listens for that request, create a new recipe through the recipe model. Again, use logical names for your route, like `/recipes/create`. Redirect to the detail page of the recipes you have create, after you've created it.

## Iteration 5 (UPDATE)
Create a route that renders a form in which you can edit a particular recipe. The input fields of this form are pre-populated with the recipe you want to edit. This means you first have query the database for this recipe. This works similar as in Iteration 2. The difference is in the hbs file. After you rendered the form, it works like Iteration 2. The difference is now that you don't create a new recipe in the route, but that you update it.