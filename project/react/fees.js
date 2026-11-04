import React  from "https://esm.sh/react@19.2.0"

const Card=()=>{
    return React.createElement(
        "div",
        {},
       [
        React.createElement("h1",{},"Course Details"),
        React.createElement(Course,{
            name:"CCA",
            price:20000
        })

    
       ]
    )
}