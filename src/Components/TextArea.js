import React from "react"

function TextArea(props){
    return(
        <div style={{backgroundColor: props.color, color: props.color?"":"white"}} className={"textarea " + props.className}>
            <div className="border ">
                <div className="text">
                    <h3>{props.title}</h3>
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TextArea