## Toy Tale React

You already built Toy Tale in Vanilla JS, now what would it look like built in React ? 

Refer back to original Mod 3 Toy Tale throughout this project if needed. 

## Introduction

The steps outlined below are from the Thinking in React tutorial that gives you a conceptual framework for approaching a new React project.

* Read through [Thinking in React](https://reactjs.org/docs/thinking-in-react.html) and use the steps to complete this assignment!

* Starter Code: The code provided is a react app generated from `npx create-react-app toy-tale-app` and a `toys.js` file located under the `resources` folder that will serve as your data and must be imported wherever you will use it! It also includes the original CSS & HTML

### STEP 1: Create Component Hierarchy

You can use invision or other visual tools (such as a whiteboard or pen & paper!) to build out the component hierarchy tree! You can also build a wireframe of you app that represents the different components in relation to each other on the page:
![component hierarchy wireframe](https://reactjs.org/static/thinking-in-react-components-eb8bda25806a89ebdc838813bdfa3601-82965.png)

### STEP 2: Create Your Views (Static Version)

Use the CSS from your `index.css` file from MOD3 Toy Tale (included in your react files) to build out the static version of all your components. In other words, what it looks like without any of the functionality. You will need to correctly apply the classes to your JSX. 


### STEP 3: Decide Where State Should Live

This step requires going back to your component hierarchy and thinking about your data flow. 
- Which components need access to this data? 
- How will components communicate between each other? 

### STEP 4: Adding Data Flow 

Your app should have the following functionality:
- a user should be able to view all the toys
- a user should be able to like a toy
- a user should be able to add a new toy 
