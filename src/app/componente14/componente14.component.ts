import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente14',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './componente14.component.html',
  styleUrl: './componente14.component.css'
})
export class Componente14Component implements OnInit {
    //listagem

    //vetor para armazenar dados da API
    vetor:Produto[] = []

    //construtor
    constructor(private servico:ProdutoService){ }

    //Inicialização do componente
    ngOnInit(){
      this.selecionar();
    }

    //Visibilidade dos botões
    btnCadastrar:boolean = true;

    //Objeto de formulário
    formulario = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl(''),
      valor: new FormControl(null)
    })

    //Método para selecionar todos os produtos
    selecionar(){
      this.servico.selecionar().subscribe(retorno => {this.vetor = retorno})
    }

    //Método para cadastrar produtos
    cadastrar(){
      this.servico.cadastrar(this.formulario.value as Produto)
      .subscribe(retorno =>{
        this.vetor.push(retorno);

        //limpar formulário
        this.formulario.reset();
      })
    }

    //Método para selecionar um produto específico
    selecionarProduto(indice:number){
      this.formulario.setValue({
        id: this.vetor[indice].id,
        nome: this.vetor[indice].nome,
        valor: this.vetor[indice].valor
      })
      this.btnCadastrar = false;
    };

    //Método para alterar produtos
    alterar(){
      this.servico.alterar(this.formulario.value as Produto)
      .subscribe(retorno => {
        let indiceAlterado = this.vetor.findIndex(obj => {
          return this.formulario.value.id === obj.id;
        })

        //Alterar o vetor
        this.vetor[indiceAlterado] = retorno;

        //Limpeza do formulário
        this.formulario.reset();

        //Visibilidade dos botões
        this.btnCadastrar = true;
      })
    }

    //Método para remover produtos
    remover(){
      this.servico.remover(this.formulario.value.id).subscribe(() =>{

        //Obter o indice do vetor que será removido
        let indiceRemovido = this.vetor.findIndex(obj =>{
          return obj.id === this.formulario.value.id;
        })

        //Remover objeto do vetor
        this.vetor.splice(indiceRemovido, 1);

        //Limpeza do formulário
        this.formulario.reset();

        //Visibilidade dos botões
        this.btnCadastrar = true;
      })
    }

    
}
