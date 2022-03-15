import React from "react"
import Game from "./Game"
import Score from "./Score"
import Count from "./Count"

export default class Appcomponent extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        score: 0,
        count: 0
      }
  
      this.changeScore = this.changeScore.bind(this)
    }
  
    changeScore(newScore, count) {
      this.setState(prevState => ({
        score: prevState.score + newScore,
        count: prevState.count + count
      }))
    }
  
    render() {
      return(
        <div>
          <Game 
             onClick={this.changeScore} 
             score={this.state.score} 
             count={this.state.count}
          />
          <Score score={this.state.score} count={this.state.count}/>
          <Count count={this.state.count} score={this.state.score}/>
          
        </div>
      )
    }
  }
  