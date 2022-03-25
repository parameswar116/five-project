import React from "react";
import Appcomponent from "./Appcomponent";
import Display from "./Display";
import Propsusage from "./Propsusage";
import Setstate from "./Setstate";


export default class App extends React.Component {
    state = {
                name  :  "telugu skill hub",
                id    :   1234
                                       
            }   
              render() 
            { 
        
             return (
                <div>
                    <center>
                    {/* <h2> 
                        <Display name={this.state.name} id={this.state.id}/>
                       
                        </h2>   
                     */}
                     {/* <Propsusage></Propsusage> */}
                     <Appcomponent></Appcomponent>
                     <Setstate></Setstate>
                    
                
                    </center>
                </div>
        )
    }
}