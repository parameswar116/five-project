import React from "react";

//Score Component

export default class Score extends React.Component {


    render() {

        const score = this.props.score

        return(
            <div>
                
                <h1>Score: {score}</h1>

            </div>
        )
    }
}
