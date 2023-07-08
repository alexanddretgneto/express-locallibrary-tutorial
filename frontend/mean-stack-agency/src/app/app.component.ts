import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
click(arg0: string) {
throw new Error('Method not implemented.');
}
  title = 'Agência Digital - PLUGIN';


  nums = [10,20]
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
  mensagem = "";

  ValorInput = (val:any) => {
    console.log(val);
    this.mensagem = val;
  }

}
