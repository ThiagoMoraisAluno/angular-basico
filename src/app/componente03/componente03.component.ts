import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {
  //Variável de imagem
  imagem:string = './assets/aranha.jpg'
  //Função para alterar uma imagem
  alterarImagem(){
    if(this.imagem === './assets/aranha.jpg'){
      this.imagem = './assets/image.png'
    }else{
      this.imagem = './assets/aranha.jpg'
    }
  }
}
