import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    
  }

  
  title = 'Agência Digital - PLUGIN';


nums = [10,20]
//usado para criar a tabela este código abaixo
nums2 = [10,20, 25, 33, 40, 56]
sum = ()=>{
    return this.nums[0] + this.nums[1]
}

  //clicando para mostrar o valor no log
  // ClickMe = () =>{
  //   console.log("clicado");
  //   // this.mensagem=val;
    
  // }

  red = "color:red";
  green = "color:green"

  //função de clicar para mostrar o valor no <h3></h3>

  mensagem1 = "";
  mensagem2 = "";
  MSG="FUNÇÃO PARA MOSTRAR E APAGAR DEPOIS DE APERTAR NO botão"




  ValorInput1 = (val:any) => {
    console.log(val);
    this.mensagem1 = val;
  }
  limparTexto1 = (val:any) => {
    console.log("");
    this.mensagem1 = "";
  }

  ValorInput2 = (val:any) => {
    console.log(val);
    this.mensagem2 = val;
  }
  limparTexto2 = (val:any) => {
    console.log("");
    this.mensagem2 = "";
  }





  // funcaoMostarOcultar(){ // }

  show=true;
  funcaoMudar(){
    this.show = !this.show;
  }

  inc(){
    this.nums.push(Math.floor(Math.random()*37));
  }
  dec(){
    this.nums.pop();
  }

}
