import User from "./User.js"
import UserClass from "./UserClass.js";
import React from "react";
import { Component } from "react";
import UserContext from "../utils/UserContext.js";

class About extends Component{
  constructor(props) {
    super(props);

    // console.log("Parent Constructor")

  }

  componentDidMount(){
    // console.log("Parent Component Did Mount")
  }

  render() {
    // console.log("Parent Render")
    return (
      <div className="flex flex-col items-center justify-center p-6 ">
      <h1 className="text-4xl text-lime-500 font-bold mb-6">About Us</h1>
     <div className="w-1/3">
     <p className="text-lg text-center leading-relaxed">
        Welcome to Foodie! We are passionate about providing delicious food
        to our customers with the highest quality ingredients. Our mission is
        to satisfy your cravings and deliver a delightful dining experience
        every time.
      </p>
      <p className="text-lg text-center leading-relaxed mt-4">
        At Foodie, we believe that food is not just about sustenance, but also
        about enjoyment and connection. Whether you're dining in or ordering
        takeout, we strive to make every meal memorable. Join us on a culinary
        journey filled with flavor, freshness, and fun!
      </p>
     </div>
    </div>
     );

        {/**<div>
          LoggedIn User
          <UserContext.Consumer>
            {({loggedInUser}) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass name={"First"} location={"Deharadun Class"} /> 
        { React.createElement(UserClass, { name: "Second", location: "US" })}*/}
   
   
  }
}


export default About;


/*
 - Parent Contructor
 - Parent Render
 
      - First Constructor
      - First Render

      - Second Constructor
      - Second Render
      
      <DOM UPDATED - IN SINGLE BATCH>
      - First ComponentDidMount
      - Second ComponentDidMount

- Parent ComponentDidMount
 */

//NOTE: When there are mutliple childs to be rendered then react will first render the all childs and then Batch together that to update the DOM and then componentDidMount is called according to the order



// React Life Cycle

// constructor => render   =>  update DOM and refs => componentDidMount
// ---- Render Phase-----          -------Commit Phase------

