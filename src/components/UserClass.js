import React from "react"

class UserClass extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: ''
            }
        };  
        //console.log("Child Constructor") 
    }

    async componentDidMount(){
        //console.log("Child Did Mount")

        const data = await fetch('https://api.github.com/users/akshaymarch7');
        const json = await data.json()

        console.log(json)

        this.setState({
            userInfo: json,
        })
    }

    componentDidUpdate(){
        console.log("Component Did Update")
    }

    componentWillUnmount(){
        console.log("Component Will Unmont")
    }
    
   render(){
    //const {name, location} = this.props;

    const {name, location, avatar_url} = this.state.userInfo

    return (
        <div className="user-card">
            <img src={avatar_url} />
            <h2>Name:{name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @akshaymarch7</h4>
        </div>
    );
   }
}

export default UserClass;

// When UserClass component is rendered, firstly constructor is called , then render is called and then at last componentDidMount is called

// As componentDidMount is called at last after render(), we used to make api call inside this function


/**
 * ---- MOUNTING cycle----
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML> Dummy
 * Component Did Mount
 *      <API Call>
 *      <this.setState> -> State variable is updated
 * 
 * 
 * ---- UPDATE
 *     
 *      render(API data)
 *      <HTML >(new API data)
 *      Component Did Update
 * 
 *
 * 
 * 
 */