import React from "react";



export default class Setstate extends React.Component {
constructor(){
    super();
    this.state={msg:"javatpoint"};
    this.updateSetState=this.updateSetState.bind(this);

}
updateSetState(){
    this.setState({msg:"best tutorial"})
}

  render() {
    return (

      <div>
          <h1>{this.state.msg}</h1>
          <button onClick={this.updateSetState}>SET STATE</button>
      </div>
    )
  }
}
