import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{ id: 'parent' },[
  React.createElement("div", { id: 'child' }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "Welcome into hello world")
  ]),
  React.createElement("div", { id: 'child' }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag")
  ])
]);

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);

// Enabling Hot Module replacement
if(module.hot){
  module.hot.accept();
}

// Why Parcel?

// Parcel is a bundler that simplifies the process of working with modern web applications by automatically managing dependencies and optimizing assets.
// It's particularly useful for React projects because browsers can't directly understand Node.js modules.
// When we import React from a Node module and try to run it on the server-side, the server doesn't understand what React is because it's meant for client-side/browser execution.
// Parcel resolves this by bundling all JavaScript code, including React and its dependencies, and generates its own JavaScript and CSS files in a dist (distribution) folder.
// These files are optimized and ready for the browser to interpret, enabling us to use React and other modern JavaScript features seamlessly in our web applications.
