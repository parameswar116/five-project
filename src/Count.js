import React from "react";

//Count Component

export default class Count extends React.Component {


    render() {

        const Count = this.props.count

        return(
            <div>
                <h1>Count: {Count}</h1>
                
            </div>
        )
    }
}
