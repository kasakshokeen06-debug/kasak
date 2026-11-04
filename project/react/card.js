import React  from "https://esm.sh/react@19.2.0"
import ReactDom from "https://esm.sh/react-dom@19.2.0/client"

const Course=(props)=>{
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1",{},[props.name,props.price]),
            // React.createElement("p",{},props.price)
        ]
    )
}

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

const box=document.getElementById("root")
const root=ReactDom.createRoot(box)
root.render(React.createElement(Card))
