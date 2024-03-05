const heading = React.createElement(
    "h1",
    {id: "heading", xyz: 'abc'}, 
    "Hello World from React!"
);
// React element is an object

console.log(heading); // {...} React element / object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading); // it takes object and convert that object into h1 tag that browser understands and put it inside root element


// The costliest thing / operation a browser will do is whenever we want change / manipulate the nodes(adding/removing the nodes) using DOM
// All these library and frameworks comes with a philosophy to optimize these costly operation
// React also comes with same philosophy that whenvere you want to interact with the web page do it using React(JavaScript) and that is why React gives helper functions to achive this 

// createElement takes  3 args - type of tag, props(object), children 

// props - children + attributes


// Nested html and passing more than one chidren or siblings


/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm an h2 tag</h2>
 *      </div>
 * </div>
 * 
 */
const parent = React.createElement(
    "div",
    {id:'parent'},
    [React.createElement(
        "div", {id:'child'},[
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag")
    ]),
    React.createElement(
        "div", {id:'child'},[
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag")
    ])
]);
//NOTE: If we have to pass more than one children in 3rd argument then we have pass the multiple childrens in  a array 



root.render(parent);

// NOTE: ReactElement (Object) => HTML (Browser Understoods)

// While it rendering into the DOM it converts itself into the HTML and put itself into the DOM

// render method replace whatever there inside the root  with we pass the react element

console.log(parent)


// React is some small javascript library

// React - is a js library which can be worked in some small portion/section(header,footer) our web page/ app to optimize

// Frameworks - requires you to create whole app/ web page using that framework

// BUT React can work in your existing application/ small piece of page
