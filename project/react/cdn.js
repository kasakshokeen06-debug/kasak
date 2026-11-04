import React  from "https://esm.sh/react@19.2.0"
import ReactDom from "https://esm.sh/react-dom@19.2.0/client"


const Course=(props)=>{
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1",{},props.name),
            React.createElement("p",{},props.price)
        ]
    )
}

const App=()=>{
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1",{},"Course Details"),
            React.createElement(Course,{
                name:"CCA",
                price:10000
            }),
            React.createElement(Course,{
                name:"BCC",
                price:7500
            }),
            React.createElement(Course,{
                name:"CPTA",
                price:35000
            }),
            React.createElement(Course,{
                name:"DA",
                price:25000
            }),
            React.createElement(Course,{
                name:"CFTA",
                price:15000
            }),
            React.createElement(Course,{
                name:"steno",
                price:16000
            })
        ]
    )
}

const container=document.getElementById("root")
const root=ReactDom.createRoot(container)
root.render(React.createElement(App))