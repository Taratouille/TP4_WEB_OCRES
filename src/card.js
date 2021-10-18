import React from "react";
import './App.css';

export function Card(props) {
  return (
      <div class="carte" style={{background: props.profil.background}}>
          <header style={{background: props.profil.background}}> <img src={props.profil.img} alt=""/> </header>
          <div class="content">
              <div class="name">
                  <div class="prenom">
                      <div class="title">First Name:</div> 
                      <div>{props.profil.prenom}</div>
                  </div>
                  <div class="nom">
                      <div class="title">Last Name:</div> 
                      <div>{props.profil.nom}</div>
                  </div>
              </div>
              <div class="date">
              <div class="date">
                  <div class="title">Birthday:</div> 
                  <div>{props.profil.date}</div>
              </div>
              </div>
          </div>
          <footer> 
              <button style={{background: props.profil.background}} onClick={props.onClick}>
                  Change Style
              </button>
          </footer>
          
      </div>
  );
}