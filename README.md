# JAMList
### by Team Jam

## Overview & User Stories
* **JAMList** is an app to help users create and manage shopping lists by store.
* User begins by **adding a store** to their Favorite Stores list. They are then prompted to enter **Store Name**, **Store Address**, **Store Hours**, and **Total Price** to send at the store. They are then redirected to the home screen.
* From the home screen, a user **adds items** to their grocery list by selecting a category of item to add.
* Once a category is selected, a user is prompted to **add additional item information** including: **Item Name**, **Description**, **Price**, **Organic status**, and **Store** to find it at.
* Once added, the item now appears in the master shopping list on the home page.
* When it's time to go shopping, a user **selects which store** they will shop at, and **a list of items** to find at the store populates.


## Technologies Used
* HTML
* CSS
* JavaScript
* Tailwind.css
* Node.js
* Express.js
* MongoDB
* Mongoose
* Heroku

## Installation
For this project, you will need to install the following dependencies:
* EJS
* Express
* method-override
* Mongoose

### How to install these packages
In your terminal, run:
```
npm init
npm i ejs express method-override mongoose
```

Verify these have been installed by checking your package.json file.

## Link to Page, hosted on Heroku
https://jamlist.herokuapp.com/

## Wireframes
Our first wireframe was a great place to start, and told following user story:
* User begins by creating a shopping list
* Once in the shopping list, the user enters information about where they plan to shop
* They can then select the store that they will shop at, then enters item to be associated with that shopping list.
* From there, a user displays the items to be shopped at that particular location
* They are then able to check off items as they are shopped
![Image of Wireframe](./assets/wireframe.png)

It later evolved to these wireframes:
![Image of New Wireframe1](./assets/new_wireframe1.jpeg)
![Image of New Wireframe2](./assets/new_wireframe2.jpeg)
![Image of New Wireframe3](./assets/new_wireframe3.jpeg)
![Image of New Wireframe4](./assets/new_wireframe4.jpeg)

We worked from this sketch to code the home page using **tailwind CSS Framework**, and somewhere between working with different sets of wireframes, we evolved the app's functionality to tell a clearer user story, as illustrated above:
![Image of Wireframe with Color Palette](./assets/wireframe2.png)
![Color palette](./assets/JamListCSS.png)

## ERD
From the beginning of our project, we knew we wanted to challenge ourselves to work with Two Models in our Mongo database. We knew we wanted to have a one to many relationship, and illustrated it in our Entity Relationship Diagram:

First draft:
![Image of ERD](./assets/erd.png)


Second draft:
![Imgae of ERD2](./assets/ERD2.png)

## Code Snippets
### Metha's favorite Code Snippets:

![Metha code snipet](./assets/carbon (1).png)

Implementation on SVG file as a button type and modify this button as a link and submit form

### Ada's favorite Code Snippets:

```
const mongoose = require('mongoose')


const groceryItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  },
  isPurchased: {
    type: Boolean
  },
  isOrganic: {
    type: Boolean
  },

  shoppingList: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ShoppingList'
  }},
    {timestamps: true})


const GroceryItem = mongoose.model('GroceryItem', groceryItemSchema)

module.exports = GroceryItem
```

I am proud of this code because without it we couldn’t have been able to build this app. It was also the first thing I offered to take up on during this project.

### Jess' favorite Code Snippets:

`<text> tbd </text>`

And a brief explanation


## Unsolved Problems
* Unclear how to let users delete shopping lists once items are associated with store.

## Future Work
* Create ability to host separate users using environmental variables and bcrypt
* Track previously shopped items
* Upload an image of a receipt after a shopping trip, and store it with the shopping instance.
* Incorporate APIs from Apple or Google Maps. When a user sets up a new Store, display it on a map. When a user is at their shopping list, add a button to get directions to the store.

## Acknowledgements
**Ada Ruiz**, **Metha Kusumapan**, and **Jess LaFrank** collaborated to design and code this app during the **General Assembly Software Engineering Immersive program** in Summer/Fall 2021. We learned all languages, frameworks, and ecosystems (GitHub and Heroku) from our incredible instructional team of Holly Girourd, Joshua Smith, and Kenny Bushman.
