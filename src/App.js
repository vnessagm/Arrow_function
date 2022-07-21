//Crie um component de class
import React, {Component} from "react";
class App extends Component{

  // Crie uma arrow function que receba uma mensagem e exiba na tela
 helloMsg = (msg) => {
    return <h3>{msg}</h3>
  }
  
  // Crie uma arrow function que retorne o dobro de um número e exiba na tela
  dobleNumber = (x) => {
    return <p>O dobro do número escolhido é: {x * 2}</p>
  }

  render(){
    return(
      <>
      <h1>Desafio de Arrow Function</h1>
      {this.helloMsg("Hello with Arrow Function.")}
      {this.dobleNumber(2)}
      </>
    )
  }
}

export default App;