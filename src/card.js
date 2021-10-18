import React from "react";
import './App.css';
import Text from './text';

export default class Card extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.value,
          /*profiles: [{
            name: "Tara",
          }],*/
        };
      }
    render(){
        const name = this.state.name;
        return(
            <div class="carte">
                <Text value={"Les infos de " + name}/>
            </div>
        )
    }
}