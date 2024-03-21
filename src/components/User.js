import { useState } from "react";
import { useEffect } from "react";

const User = ({ name }) => {
    const [count, setCount ] = useState(0);

    useEffect(() => {
        // API Calls
    })


    return (
        <div className="user-card">
            <div>
                <h1>Count: {count}</h1>
                <button onClick={() => {setCount(count + 1)}}>
                    Increase Count
                </button>
            </div>
            <h2>Name: {name}</h2>
            <h3>Location: Dehradun</h3>
            <h4>Contact: @akshaymarch7</h4>
        </div>
    )
}

export default User;