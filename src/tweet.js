import React, {useState} from "react";

//we can add props i.e custom names
//instead of passing props parameter we can deconstruct the props
function Tweet({name, message}){

    const [likes, setLikes] = useState(0);
    const like = () => {
      setLikes(likes+1);
    }

    return(
        <div className="tweets">
            <h1>{name}</h1>
            <h3>{message}</h3>
            <p>Number of likes:</p>
            <h2>{likes}</h2>
            <button onClick={like}>Like</button>
        </div>
    );
}

export default Tweet;