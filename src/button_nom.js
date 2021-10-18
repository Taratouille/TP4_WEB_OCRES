import React from "react";
import './App.css';
import { Card } from './card';
import { Button } from './button';
import { Publi } from './publication';


class ButtonList extends React.Component{
    
    renderButton(i) {
        return <Button 
            value={i} 
            onClick={() => this.props.onClick(i)}
        />;
      }
    render(){
        return(
            <div class="button_field">
                <div>{this.renderButton(this.props.profils[0])}</div>
                <div>{this.renderButton(this.props.profils[1])}</div>
                <div>{this.renderButton(this.props.profils[2])}</div>
            </div>
        )
    }
}

export default class Page extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          profils : [
            {
              prenom: "Bob",
              nom: "Marley",
              date: "February 6, 1945",
              img: "img/bob.png",
              background: 'white',
              publi: {
                  des: 'Yo my name is Bob Marley. Yesterday I smoked the sickest joint in my life. If you want to try it, click on the like button and subscribe!',
                  like: 26,
              },
            },
            {
              prenom: "Manon",
              nom: "Calvayrac",
              date: "July 14, 2000",
              img: "img/manon.png",
              background: 'white',
              publi: {
                  des: 'Hey! I\'m Manon Calvayrac and I won the Ippon Cloud Challenge few days ago!',
                  like: 75,
              }, 
            },
            {
              prenom: "Jim",
              nom: "Morrison",
              date: "December 8, 1943",
              img: "img/jim.png",
              background: 'white',
              publi: {
                des: 'My name is Jim, but you can call me Jimmy. If you want to see me, go to the Père Lachaise in Paris.',
                like: 19,
            }, 
            }
          ],
          profil : {
            prenom: "Bob",
            nom: "Marley",
            date: "February 6, 1945",
            img: "img/bob.png",
            background: 'white',
            publi: {
                des: 'Yo my name is Bob Marley. Yesterday I smoked the sickest joint in my life. If you want to try it, click on the like button and subscribe!',
                like: 26,
            },
          },
        
          backgrounds : [
            {color: 'red'},
            {color: 'blue'},
            {color: 'yellow'},
            {color: 'green'},
            {color: 'purple'},
            {color: 'orange'},
            {color: 'brown'},
            {color: 'aqua'},
            {color: 'burlywood'},
            {color: 'cadetblue'},
            {color: 'white'}
          ]
        }; 
      }

    handleClick(i){
        this.setState({
            profil:i,
        });
        return (
        <>
        <Card profil={this.state.profil }/>
        <Publi profil={this.state.profil }/>
        </>
        )
    }

    changeBackground(){
        let many = this.state.profils.slice(); //creates the clone of the state
        let one = this.state.profil.nom.slice(); //creates the clone of the state
        let x;
        
        for(let i = 0; i<3;i++){
            if(many[i].nom===one){
                for(let j = 0; j<this.state.backgrounds.length;j++){
                    if(many[i].background===this.state.backgrounds[j].color){
                        
                        if(j===10){
                            j=0;
                        }
                        else{
                            j++;
                        }
                        
                        many[i].background=this.state.backgrounds[j].color;
                        break;
                    }
                }
                x=i;
            }
        }
        this.setState({profils: many, profil:many[x]});
    }

    addLike(){
        let many = this.state.profils.slice(); //creates the clone of the state
        let one = this.state.profil.nom.slice(); //creates the clone of the state
        let x;

        for(let i = 0; i<3;i++){
            if(many[i].nom===one){
                many[i].publi.like++;
                x=i;
            }
        }
        this.setState({profils: many, profil:many[x]});
    }

    render(){
        return(
            <body>
                <header>
                    <ButtonList 
                        profils={this.state.profils}
                        onClick={(i) => this.handleClick(i)}
                    />
                </header>

                <Card profil={this.state.profil} onClick={() => this.changeBackground()} />

                <Publi profil={this.state.profil} onClick={() => this.addLike()}/>
                
            </body>
        )
        
    }
}

