# Password generator app built with react

This project is built for learning purpose , in this project we will try to apply react js basics

# Folder structure

![folderStructure](src/images/appFolders.PNG)

## node_modules

This folder contains the code of all the installed dependencies via npm like bootstrap and react ...

## public

In this folder we find the index.html page where all the jsx code is rendered there after compilation

## src

This folder is the heart of any react project it contains by default 3 main files App.js file is the root component of our react project it contains the start code of any raect app that will be rendered in index.js file this index.js will use react-dom/client library to render the app.js code in the index.html file

### src/components

In the component folder we will organize our reusable components ,the manner how we organize is not a universal rule , it came with years of experience and working in many projects , and the organization depends on the size of the project and the team that works on that project, a good folder structure can make your project maintaintable and can be scalled later for this project i choosed this rules in organizing our components:

This project is a simple project contains just one page as you can see in the image below we can devide
our page into 4 components plus the app component (primary component) that will hold all our app
inside the app component we create a heading component that will display the welcomming title
below the heading component we can notice a box or wrapper (password-wrapper) this one contains the generated password (password-content component) and the button (generate-btn component) that will generate a new password after each click

![ourApp](src/images/ourApp.PNG)

# The Logic behind This app

![applogic](src/images/appcode.png)

First all the logic behind our app is done in the App Component

![askUserForName](src/images/askUserForName.PNG)

As a first feature : the moment our app starts we ask the user to enter his name using javascript
propmt function and we define a state called name to save the entred name

![passwordState](src/images/passwordState.png)

Then we define a state called password to save the generated password

![generatePasswordFunc](src/images/genratePasswordFunc.png)

This is the function where we write our logic for generating new password

As a first step we have this line
let characters =
"123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#-";
Here we define all the possible characters that our password can be built with

After that we define how long our password will be
let charCount = 22;

Then we define a variable where we will save our password everytime we add a new character
let randomPassword = "";

Then we use loop overs all the possible characters 22 times each time we pick up a random character and add it to our randomPassword variable
for (let i = 0; i < charCount; i++) {
randomPassword +=
characters[Math.floor(Math.random() * characters.length)];
}

At the end we will update the state password with password we built and when react tracks a change
in the state it will update the area responsible for displaying the password

we can add a feature that allow to coppy the generated password into the clipboard
navigator.clipboard.writeText(randomPassword);

## The notification Toast

We want after geneting a new password to display a notification toast to the user at the top right corner
of the page that will fade after 2 seconds, and for that we will use a library called: react-toastify you can check it from this [link](https://fkhadra.github.io/react-toastify/introduction/)

### Instalation

To use react-toastify library we will first install it using the command:
npm install react-toastify

### Imports

After installing the react-toastify library we have to import it before we can use it
we need to import : import { ToastContainer, toast } from "react-toastify";
ToastContainer is the wrapper component of the Toast we need to place it int The jsx of the app component
as it show in the picture below

![toastContainer](src/images/toastContainer.png)

The Toast container has many props you can read about them in the official documentation of the library

The second import is : toast it is a function that expects a message as an argument this message the one we see when the toast is displayed on the screen

We need also to import the styles file of the toast : import "react-toastify/dist/ReactToastify.css";

### Using the toast

![notify](src/images/notify.png)

To use a toast we will define a function called notify with no argument this one will return our toast

![generatePasswordFunc](src/images/genratePasswordFunc.png)

Then we call the notify function when our password is generated inside the generatePassword function
